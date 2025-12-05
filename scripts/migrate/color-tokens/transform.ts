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

  // if restrictToOakImports is set collect imported component names from 'oak-components'
  // this option should be set when run within other repos
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
    { regex: /(icon)/i, mappings: ICON_COLOR_MAPPINGS, name: "icon" },
    {
      regex: /(bg|background|fill|loaderColor)/i,
      mappings: BG_COLOR_MAPPINGS,
      name: "background",
    },
    {
      regex: /(border|stroke)/i,
      mappings: BORDER_COLOR_MAPPINGS,
      name: "border",
    },
    { regex: /(color)/i, mappings: TEXT_COLOR_MAPPINGS, name: "text" },
  ];

  // helper function to transform only values from colorMappings
  function transformIfMapped(
    value: any,
    mappings: Record<string, string>,
  ): any {
    if (value?.type === "StringLiteral" && mappings[value.value]) {
      return j.stringLiteral(mappings[value.value]!);
    }
    return value;
  }

  // helper function to transform string literals based on parent node type
  function transformStringLiteral(
    parent: ASTPath,
    mappings: Record<string, string>,
  ) {
    // check if parent is an Propery or ObjectProperty (backgroundColor: "black")
    if (j.ObjectProperty.check(parent.node) || j.Property.check(parent.node)) {
      parent.node.value = transformIfMapped(parent.node.value, mappings);
    }

    // check if parent is an AssignmentPattern (default parameter) (iconColor = "black")
    if (j.AssignmentPattern.check(parent.node)) {
      parent.node.right = transformIfMapped(parent.node.right, mappings);
    }

    // check if parent is a VariableDeclarator (const backgroundColor = "grey20")
    if (j.VariableDeclarator.check(parent.node)) {
      parent.node.init = transformIfMapped(parent.node.init, mappings);
    }

    // check if parent is a JSXAttribute (<OakBox $background="white" />)
    if (j.JSXAttribute.check(parent.node)) {
      parent.node.value = transformIfMapped(parent.node.value, mappings);
    }

    // check if parent is an AssignmentExpression (color = "black")
    if (j.AssignmentExpression.check(parent.node)) {
      parent.node.right = transformIfMapped(parent.node.right, mappings);
    }
  }

  // process each color mapping type
  colorMappings.forEach(({ regex, mappings }) => {
    // transform based on identifier matching
    root
      .find(j.Identifier)
      .filter(
        (path) =>
          regex.test(path.node.name) &&
          !path.node.name.toLowerCase().includes("colorfilter"),
      )
      .forEach((path) => {
        // if restrictToOakImports option is set, it will only update value inside components imported from oak-components
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
          // if restrictToOakImports option is not set, it will be run on every component
        } else if (!options.restrictToOakImports) {
          transformStringLiteral(path.parent, mappings);
        }
      });

    // handle StringLiterals in ternary expressions and other complex expressions
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
            let jsxElement = current.parent;
            while (jsxElement && !j.JSXOpeningElement.check(jsxElement.node)) {
              jsxElement = jsxElement.parent;
            }
            // if restrictToOakImports option is set, it will only update values inside components imported from oak-components
            if (
              options.restrictToOakImports &&
              jsxElement &&
              j.JSXOpeningElement.check(jsxElement.node) &&
              j.JSXIdentifier.check(jsxElement.node.name) &&
              oakComponentNames.has(jsxElement.node.name.name)
            ) {
              isOakComponent = true;
              // if transform is not restricted to oak-components it will be run on every component
            } else if (!options.restrictToOakImports) {
              isOakComponent = true;
            }
            // skip colorFilter props
            if (
              j.JSXIdentifier.check(name) &&
              name.name.toLowerCase().includes("colorfilter")
            ) {
              shouldSkip = true;
            }
            if (j.JSXIdentifier.check(name) && regex.test(name.name)) {
              isCorrectContext = true;
            }
          } else if (
            j.Property.check(current.node) ||
            j.ObjectProperty?.check?.(current.node)
          ) {
            const key = current.node.key;
            // skip colorfilter props
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
