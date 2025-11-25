import { FileInfo, API, ASTPath, Identifier } from "jscodeshift";

const TEXT_COLOR_MAPPINGS: Record<string, string> = {
  navy120: "text-link-pressed",
  // "navy120": "text-link-visited",

  black: "text-primary",
  grey60: "text-subdued",
  red: "text-error",
  grey50: "text-disabled",
  navy: "text-link-active",
  navy110: "text-link-hover",
  white: "text-inverted",
  oakGreen: "text-success",
  lemon: "text-promo",
};

const BTN_COLOR_MAPPINGS: Record<string, string> = {
  white: "bg-btn-secondary",
  grey20: "bg-btn-secondary-hover",
  grey30: "bg-btn-secondary-disabled",
  black: "bg-btn-primary",
  grey60: "bg-btn-primary-hover",
  grey50: "bg-btn-primary-disabled",
};

const ICON_BG_COLOR_MAPPINGS: Record<string, string> = {
  black: "bg-icon",
  grey60: "bg-icon-hover",
};

const BG_COLOR_MAPPINGS: Record<string, string> = {
  white: "bg-primary",
  // "white": "bg-btn-secondary",
  grey20: "bg-neutral",
  // "grey20": "bg-btn-secondary-hover",
  grey30: "bg-neutral-stronger",
  // "grey30": "bg-btn-secondary-disabled",
  black: "bg-inverted",
  // "black": "bg-btn-primary",
  // "black": "bg-icon",
  grey60: "bg-btn-primary-hover",
  // "grey60": "bg-icon-hover",
  red: "bg-error",
  grey50: "bg-btn-primary-disabled",
  mint: "bg-decorative1-main",
  mint50: "bg-decorative1-subdued",
  // "mint50": "bg-correct",
  mint30: "bg-decorative1-very-subdued",
  aqua: "bg-decorative2-main",
  aqua50: "bg-decorative2-subdued",
  aqua30: "bg-decorative2-very-subdued",
  lavender: "bg-decorative3-main",
  lavender50: "bg-decorative3-subdued",
  lavender30: "bg-decorative3-very-subdued",
  pink: "bg-decorative4-main",
  pink50: "bg-decorative4-subdued",
  pink30: "bg-decorative4-very-subdued",
  lemon: "bg-decorative5-main",
  lemon50: "bg-decorative5-subdued",
  lemon30: "bg-decorative5-very-subdued",
  red30: "bg-incorrect",
};

const BORDER_COLOR_MAPPINGS: Record<string, string> = {
  oakGreen: "border-brand",
  // "oakGreen": "border-success",

  amber: "border-warning",
  // "amber": "border-decorative6-stronger",

  black: "border-primary",
  white: "border-inverted",
  grey50: "border-neutral",
  grey40: "border-neutral-lighter",
  red: "border-error",
  mint: "border-decorative1",
  mint110: "border-decorative1-stronger",
  aqua: "border-decorative2",
  aqua110: "border-decorative2-stronger",
  lavender: "border-decorative3",
  lavender110: "border-decorative3-stronger",
  pink: "border-decorative4",
  pink110: "border-decorative4-stronger",
  lemon50: "border-decorative5",
  lemon110: "border-decorative5-stronger",
  amber50: "border-decorative6",
};

const ICON_COLOR_MAPPINGS: Record<string, string> = {
  oakGreen: "icon-brand",
  // "oakGreen": "icon-success",

  white: "icon-main",
  black: "icon-inverted",
  grey50: "icon-disabled",
  red: "icon-error",
  amber: "icon-warning",
};

const CODE_COLOR_MAPPINGS: Record<string, string> = {
  "rpf-syntax-blue": "code-blue",
  "rpf-syntax-green": "code-green",
  "rpf-syntax-grey": "code-grey",
  "rpf-syntax-pink": "code-pink",
};

type ColorMapping = {
  regex: RegExp;
  mappings: Record<string, string>;
  name: string;
};

export default function (file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

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
        transformStringLiteral(path.parent, mappings);
      });

    // Handle StringLiterals in ternary expressions and other complex expressions
    // old version not taking colorFilter into account
    // root
    //   .find(j.StringLiteral)
    //   .filter(path => mappings[path.node.value] !== undefined)
    //   .forEach(path => {
    //     let current = path.parent;
    //     let isCorrectContext = false;

    //     // Traverse up to find if we're in the correct context
    //     while (current && !isCorrectContext) {
    //       if (j.JSXAttribute.check(current.node)) {
    //         const name = current.node.name;
    //         if (j.JSXIdentifier.check(name) && regex.test(name.name)) {
    //           isCorrectContext = true;
    //         }
    //       } else if (j.Property.check(current.node)) {
    //         const key = current.node.key;
    //         if (j.Identifier.check(key) && regex.test(key.name)) {
    //           isCorrectContext = true;
    //         }
    //       } else if (j.ObjectProperty?.check && j.ObjectProperty.check(current.node)) {
    //         const key = current.node.key;
    //         if (j.Identifier.check(key) && regex.test(key.name)) {
    //           isCorrectContext = true;
    //         }
    //       }
    //       current = current.parent;
    //     }

    //     if (isCorrectContext) {
    //       path.node.value = mappings[path.node.value]!;
    //     }
    //   });

    // Handle StringLiterals in ternary expressions and other complex expressions
    root
      .find(j.StringLiteral)
      .filter((path) => mappings[path.node.value] !== undefined)
      .forEach((path) => {
        let current = path.parent;
        let isCorrectContext = false;
        let shouldSkip = false;

        while (current && !isCorrectContext && !shouldSkip) {
          if (j.JSXAttribute.check(current.node)) {
            const name = current.node.name;
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

        if (isCorrectContext && !shouldSkip) {
          path.node.value = mappings[path.node.value]!;
        }
      });
  });

  return root.toSource();
}
