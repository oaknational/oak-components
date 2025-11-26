import { FileInfo, API, ASTPath } from "jscodeshift";
import {
  TEXT_COLOR_MAPPINGS,
  BG_COLOR_MAPPINGS,
  BORDER_COLOR_MAPPINGS,
  ICON_COLOR_MAPPINGS,
} from "./colorMappings";

type ColorMapping = {
  regex: RegExp;
  mappings: Record<string, string>;
  name: string;
};

type TransformOptions = {
  restrictToOakImports?: boolean;
};

export default function (
  file: FileInfo,
  api: API,
  options: TransformOptions = {},
) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Collect imported component names from 'oak-components'
  const oakComponentNames = new Set<string>();
  if (options.restrictToOakImports) {
    root
      .find(j.ImportDeclaration)
      .filter(
        (path) =>
          typeof path.node.source.value === "string" &&
          path.node.source.value.startsWith("@oaknational/oak-components"),
      )
      .forEach((path) => {
        path.node.specifiers?.forEach((spec) => {
          if (
            spec.type === "ImportSpecifier" ||
            spec.type === "ImportDefaultSpecifier"
          ) {
            spec.local?.name &&
              oakComponentNames.add(spec.local.name.toString());
          }
        });
      });
  }

  // order is important here
  const colorMappings: ColorMapping[] = [
    {
      regex: /(bg|background|fill|loaderColor)/i,
      mappings: BG_COLOR_MAPPINGS,
      name: "background",
    },
    { regex: /(icon)/i, mappings: ICON_COLOR_MAPPINGS, name: "icon" },
    {
      regex: /(border|stroke)/i,
      mappings: BORDER_COLOR_MAPPINGS,
      name: "border",
    },
    { regex: /(color)/i, mappings: TEXT_COLOR_MAPPINGS, name: "text" },
  ];

  // Helper function to transform string literals based on parent node type
  function transformStringLiteral(
    parent: ASTPath,
    mappings: Record<string, string>,
  ) {
    // Check if parent is a Property
    if (j.Property.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && mappings[value.value]) {
        parent.node.value = j.stringLiteral(mappings[value.value]!);
      }
    }

    // Check if parent is an ObjectProperty (babel AST)
    if (j.ObjectProperty?.check && j.ObjectProperty.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && mappings[value.value]) {
        parent.node.value = j.stringLiteral(mappings[value.value]!);
      }
    }

    // Check if parent is an AssignmentPattern (default parameter)
    if (j.AssignmentPattern.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && mappings[right.value]) {
        parent.node.right = j.stringLiteral(mappings[right.value]!);
      }
    }

    // Check if parent is a VariableDeclarator
    if (j.VariableDeclarator.check(parent.node)) {
      const init = parent.node.init;
      if (init?.type === "StringLiteral" && mappings[init.value]) {
        parent.node.init = j.stringLiteral(mappings[init.value]!);
      }
    }

    // Check if parent is a JSXAttribute
    if (j.JSXAttribute.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && mappings[value.value]) {
        parent.node.value = j.stringLiteral(mappings[value.value]!);
      }
    }

    // Check if parent is an AssignmentExpression
    if (j.AssignmentExpression.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && mappings[right.value]) {
        parent.node.right = j.stringLiteral(mappings[right.value]!);
      }
    }
  }

  // Process each color mapping type
  colorMappings.forEach(({ regex, mappings, name }) => {
    // Transform based on identifier matching
    root
      .find(j.Identifier)
      .filter(
        (path) =>
          regex.test(path.node.name) &&
          !path.node.name.toLowerCase().includes("colorfilter"),
      )
      .forEach((path) => {
        // Only update if inside JSX for an Oak component (if restricted)
        if (
          options.restrictToOakImports &&
          path.parent &&
          j.JSXAttribute.check(path.parent.node)
        ) {
          let jsxElement = path.parent.parent;
          while (jsxElement && !j.JSXOpeningElement.check(jsxElement.node)) {
            jsxElement = jsxElement.parent;
          }
          if (
            jsxElement &&
            j.JSXOpeningElement.check(jsxElement.node) &&
            j.JSXIdentifier.check(jsxElement.node.name) &&
            oakComponentNames.has(jsxElement.node.name.name)
          ) {
            transformStringLiteral(path.parent, mappings);
          }
        } else if (!options.restrictToOakImports) {
          transformStringLiteral(path.parent, mappings);
        }
      });

    // Handle StringLiterals in ternary expressions and other complex expressions
    root
      .find(j.StringLiteral)
      .filter((path) => mappings[path.node.value] !== undefined)
      .forEach((path) => {
        let current = path.parent;
        let isCorrectContext = false;
        let shouldSkip = false;
        let isOakComponent = false;

        while (current && !isCorrectContext && !shouldSkip) {
          if (j.JSXAttribute.check(current.node)) {
            const name = current.node.name;
            // Oak component check
            let jsxElement = current.parent;
            while (jsxElement && !j.JSXOpeningElement.check(jsxElement.node)) {
              jsxElement = jsxElement.parent;
            }
            if (
              options.restrictToOakImports &&
              jsxElement &&
              j.JSXOpeningElement.check(jsxElement.node) &&
              j.JSXIdentifier.check(jsxElement.node.name) &&
              oakComponentNames.has(jsxElement.node.name.name)
            ) {
              isOakComponent = true;
            } else if (!options.restrictToOakImports) {
              isOakComponent = true;
            }
            if (
              j.JSXIdentifier.check(name) &&
              name.name.toLowerCase().includes("colorfilter")
            ) {
              shouldSkip = true;
            }
            if (j.JSXIdentifier.check(name) && regex.test(name.name)) {
              isCorrectContext = true;
            }
          } else if (j.Property.check(current.node)) {
            const key = current.node.key;
            if (
              j.Identifier.check(key) &&
              key.name.toLowerCase().includes("colorfilter")
            ) {
              shouldSkip = true;
            }
            if (j.Identifier.check(key) && regex.test(key.name)) {
              isCorrectContext = true;
            }
          } else if (
            j.ObjectProperty?.check &&
            j.ObjectProperty.check(current.node)
          ) {
            const key = current.node.key;
            if (
              j.Identifier.check(key) &&
              key.name.toLowerCase().includes("colorfilter")
            ) {
              shouldSkip = true;
            }
            if (j.Identifier.check(key) && regex.test(key.name)) {
              isCorrectContext = true;
            }
          }
          current = current.parent;
        }

        if (isCorrectContext && !shouldSkip && isOakComponent) {
          path.node.value = mappings[path.node.value]!;
        }
      });
  });

  return root.toSource();
}
