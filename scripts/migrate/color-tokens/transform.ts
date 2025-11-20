import { FileInfo, API, JSXAttribute, JSCodeshift, Identifier } from "jscodeshift";

// what is left

// do the search for each color left
// What to do about primitive vars which have more than one possible value?
// fill = "black",
// theme.ts files shouldn't be modified
// handle all parseColor("black") cases in a separate script?
  // - cases where UI token is used but in a wrong way, ie. iconColor = "text-primary",

const TEXT_COLOR_MAPPINGS: Record<string, string> = {
  "navy120": "text-link-pressed",
  // "navy120": "text-link-visited",

  "black": "text-primary",
  "grey60": "text-subdued",
  "red": "text-error",
  "grey50": "text-disabled",
  "navy": "text-link-active",
  "navy110": "text-link-hover",
  "white": "text-inverted",
  "oakGreen": "text-success",
  "lemon": "text-promo",
};

const BG_COLOR_MAPPINGS: Record<string, string> = {
  "white": "bg-primary",
  // "white": "bg-btn-secondary",

  "grey20": "bg-neutral",
  // "grey20": "bg-btn-secondary-hover",

  "grey30": "bg-neutral-stronger",
  // "grey30": "bg-btn-secondary-disabled",

  "black": "bg-inverted",
  // "black": "bg-btn-primary",
  // "black": "bg-icon",

  "grey60": "bg-btn-primary-hover",
  // "grey60": "bg-icon-hover",

  "red": "bg-error",
  "grey50": "bg-btn-primary-disabled",
  "mint": "bg-decorative1-main",
  "mint50": "bg-decorative1-subdued", 
  "mint30": "bg-decorative1-very-subdued",
  "aqua": "bg-decorative2-main",
  "aqua50": "bg-decorative2-subdued",
  "aqua30": "bg-decorative2-very-subdued",
  "lavender": "bg-decorative3-main",
  "lavender50": "bg-decorative3-subdued",
  "lavender30": "bg-decorative3-very-subdued",
  "pink": "bg-decorative4-main",
  "pink50": "bg-decorative4-subdued",
  "pink30": "bg-decorative4-very-subdued",
  "lemon": "bg-decorative5-main",
  "lemon50": "bg-decorative5-subdued",
  "lemon30": "bg-decorative5-very-subdued",
  // "mint50": "bg-correct",
  "red30": "bg-incorrect",
};

const BORDER_COLOR_MAPPINGS: Record<string, string> = {
  "oakGreen": "border-brand",
  // "oakGreen": "border-success",

  "amber": "border-warning",
  // "amber": "border-decorative6-stronger",

  "black": "border-primary",
  "white": "border-inverted",
  "grey50": "border-neutral",
  "grey40": "border-neutral-lighter",
  "red": "border-error",
  "mint": "border-decorative1",
  "mint110": "border-decorative1-stronger",
  "aqua": "border-decorative2",
  "aqua110": "border-decorative2-stronger",
  "lavender": "border-decorative3",
  "lavender110": "border-decorative3-stronger",
  "pink": "border-decorative4",
  "pink110": "border-decorative4-stronger",
  "lemon50": "border-decorative5",
  "lemon110": "border-decorative5-stronger",
  "amber50": "border-decorative6",
};

const ICON_COLOR_MAPPINGS: Record<string, string> = {
  "oakGreen": "icon-brand",
  // "oakGreen": "icon-success",

  "white": "icon-main",
  "black": "icon-inverted",
  "grey50": "icon-disabled",
  "red": "icon-error",
  "amber": "icon-warning",
};

const CODE_COLOR_MAPPINGS: Record<string, string> = {
  "rpf-syntax-blue": "code-blue",
  "rpf-syntax-green": "code-green",
  "rpf-syntax-grey": "code-grey",
  "rpf-syntax-pink": "code-pink",
};

export default function (file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // ICON COLOR
  const iconColorRegex = /(icon)/i;
  
  root
    .find(j.Identifier)
    .filter(path => iconColorRegex.test(path.node.name)) 
    .forEach(path => {
    const parent = path.parent;
    
    // Check if parent is a Property and has a StringLiteral value
    if (j.Property.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(ICON_COLOR_MAPPINGS[value.value]!);
      }
    }
    
    // is this really needed?
    // Check if parent is a PropertyAssignment (TypeScript)
    if (j.PropertyAssignment?.check && j.PropertyAssignment.check(parent.node)) {
      const initializer = parent.node.initializer;
      if (initializer?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[initializer.value]) {
        parent.node.initializer = j.stringLiteral(ICON_COLOR_MAPPINGS[initializer.value]!);
      }
    }

    // Check if parent is an ObjectProperty (babel AST node type)
    if (j.ObjectProperty?.check && j.ObjectProperty.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(ICON_COLOR_MAPPINGS[value.value]!);
      }
    }
    
    // Check if parent is an AssignmentPattern (default parameter: iconColor = "black")
    if (j.AssignmentPattern.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[right.value]) {
        parent.node.right = j.stringLiteral(ICON_COLOR_MAPPINGS[right.value]!);
      }
    }

    // Check if parent is a VariableDeclarator and has a StringLiteral init
    if (j.VariableDeclarator.check(parent.node)) {
      const init = parent.node.init;
      if (init?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[init.value]) {
        parent.node.init = j.stringLiteral(ICON_COLOR_MAPPINGS[init.value]!);
      }
    }
    
    // Check if parent is a JSXAttribute and has a StringLiteral value
    if (j.JSXAttribute.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(ICON_COLOR_MAPPINGS[value.value]!);
      }
    }

    // Check if parent is an AssignmentExpression (e.g., iconColor = "black")
    if (j.AssignmentExpression.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && ICON_COLOR_MAPPINGS[right.value]) {
        parent.node.right = j.stringLiteral(ICON_COLOR_MAPPINGS[right.value]!);
      }
    }
  });


  // >>> @todo check if this changes anything
  //  // Check if parent is an AssignmentPattern (destructuring default: { $background = "black" })
  //   if (j.AssignmentPattern.check(parent.node)) {
  //     const right = parent.node.right;
  //     if (right?.type === "StringLiteral" && BG_COLOR_MAPPINGS[right.value]) {
  //       parent.node.right = j.stringLiteral(BG_COLOR_MAPPINGS[right.value]!);
  //     }
  //   }

  // what is left
  // iconColorFilter: "black" -> the type is OakColorFilterToken
  // this will match both color and bg

  // // BG COLOR
  const bgColorRegex = /(bg|background|fill)/i;
  
  root
    .find(j.Identifier)
    .filter(path => bgColorRegex.test(path.node.name)) 
    .forEach(path => {
    const parent = path.parent;
    
    // Check if parent is a Property and has a StringLiteral value
    if (j.Property.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BG_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BG_COLOR_MAPPINGS[value.value]!);
      }
    }

    // Check if parent is an ObjectProperty (babel AST)
    if (j.ObjectProperty?.check && j.ObjectProperty.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BG_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BG_COLOR_MAPPINGS[value.value]!);
      }
    }
    
    // Check if parent is a VariableDeclarator and has a StringLiteral init
    if (j.VariableDeclarator.check(parent.node)) {
      const init = parent.node.init;
      if (init?.type === "StringLiteral" && BG_COLOR_MAPPINGS[init.value]) {
        parent.node.init = j.stringLiteral(BG_COLOR_MAPPINGS[init.value]!);
      }
    }
    
    // Check if parent is a JSXAttribute and has a StringLiteral value
    if (j.JSXAttribute.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BG_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BG_COLOR_MAPPINGS[value.value]!);
      }
    }

    // Check if parent is an AssignmentPattern (destructuring default: { $background = "black" })
    if (j.AssignmentPattern.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && BG_COLOR_MAPPINGS[right.value]) {
        parent.node.right = j.stringLiteral(BG_COLOR_MAPPINGS[right.value]!);
      }
    }
  });

  // Handle StringLiterals in ternary expressions and other complex expressions
  root
    .find(j.StringLiteral)
    .filter(path => {
      // Check if this string literal should be transformed
      return BG_COLOR_MAPPINGS[path.node.value] !== undefined;
    })
    .forEach(path => {
      // Check if this is in a context related to background/bg
      let current = path.parent;
      let isBackgroundContext = false;
      
      // Traverse up to find if we're in a background-related context
      while (current && !isBackgroundContext) {
        if (j.JSXAttribute.check(current.node)) {
          const name = current.node.name;
          if (j.JSXIdentifier.check(name) && bgColorRegex.test(name.name)) {
            isBackgroundContext = true;
          }
        } else if (j.Property.check(current.node)) {
          const key = current.node.key;
          if (j.Identifier.check(key) && bgColorRegex.test(key.name)) {
            isBackgroundContext = true;
          }
        }
        current = current.parent;
      }
      
      if (isBackgroundContext) {
        path.node.value = BG_COLOR_MAPPINGS[path.node.value]!;
      }
    });

  // BORDER COLOR
  const borderColorRegex = /(border|stroke)/i;
  // const borderColorRegex = /^\$?border/i;  // ^ anchors to start, \$? makes $ optional
  
  root
    .find(j.Identifier)
    .filter(path => borderColorRegex.test(path.node.name)) 
    .forEach(path => {
    const parent = path.parent;
    
    // Debug: log when we find $borderColor
    if (path.node.name === "$borderColor") {
      console.log("Found $borderColor");
      console.log("Parent type:", parent.node.type);
      console.log("File:", file.path);
      if (j.Property.check(parent.node)) {
        console.log("Is Property - value:", parent.node.value);
        console.log("Value type:", parent.node.value?.type);
        console.log("String value:", parent.node.value?.value);
        console.log("Mapping exists?", BORDER_COLOR_MAPPINGS[parent.node.value?.value]);
      }
    }
    

    // Check if parent is a Property and has a StringLiteral value
    if (j.Property.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BORDER_COLOR_MAPPINGS[value.value]!);
      }
    }

  //   // @todo check if for other mapping this will make sense too
  //   // Check if parent is an ObjectProperty (babel AST node type)
  //   if (j.ObjectProperty?.check && j.ObjectProperty.check(parent.node)) {
  //     const value = parent.node.value;
  //     if (value?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[value.value]) {
  //       parent.node.value = j.stringLiteral(BORDER_COLOR_MAPPINGS[value.value]!);
  //     }
  //   }

    // Check if parent is a VariableDeclarator and has a StringLiteral init
    if (j.VariableDeclarator.check(parent.node)) {
      const init = parent.node.init;
      if (init?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[init.value]) {
        parent.node.init = j.stringLiteral(BORDER_COLOR_MAPPINGS[init.value]!);
      }
    }
    
    // Check if parent is a JSXAttribute and has a StringLiteral value
    if (j.JSXAttribute.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BORDER_COLOR_MAPPINGS[value.value]!);
      }
    }

    //   // Check if parent is an AssignmentPattern (destructuring default: { $background = "black" })
    if (j.AssignmentPattern.check(parent.node)) {
      const right = parent.node.right;
      if (right?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[right.value]) {
        parent.node.right = j.stringLiteral(BORDER_COLOR_MAPPINGS[right.value]!);
      }
    }
  });

  // Handle StringLiterals in ternary expressions and other complex expressions
  root
    .find(j.StringLiteral)
    .filter(path => {
      // Check if this string literal should be transformed
      return BORDER_COLOR_MAPPINGS[path.node.value] !== undefined;
    })
    .forEach(path => {
      // Check if this is in a context related to background/bg
      let current = path.parent;
      let isBorderContext = false;
      
      // Traverse up to find if we're in a background-related context
      while (current && !isBorderContext) {
        if (j.JSXAttribute.check(current.node)) {
          const name = current.node.name;
          if (j.JSXIdentifier.check(name) && borderColorRegex.test(name.name)) {
            isBorderContext = true;
          }
        } else if (j.Property.check(current.node)) {
          const key = current.node.key;
          if (j.Identifier.check(key) && borderColorRegex.test(key.name)) {
            isBorderContext = true;
          }
        }
        current = current.parent;
      }
      
      if (isBorderContext) {
        path.node.value = BORDER_COLOR_MAPPINGS[path.node.value]!;
      }
    });

  // what is left?
  // $borderColor="grey60" -> missing from border tokens
  // borderColor: "blue", -> blue is missing from border tokens

  // TEXT COLOR
  const textColorRegex = /(color)/i;
  
  root
    .find(j.Identifier)
    .filter(path => textColorRegex.test(path.node.name)) 
    .forEach(path => {
    const parent = path.parent;
    
    // Check if parent is a Property and has a StringLiteral value
    if (j.Property.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && TEXT_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(TEXT_COLOR_MAPPINGS[value.value]!);
      }
    }

    // Check if parent is an ObjectProperty (babel AST node type)
    if (j.ObjectProperty?.check && j.ObjectProperty.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && BORDER_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(BORDER_COLOR_MAPPINGS[value.value]!);
      }
    }

    
    // Check if parent is a VariableDeclarator and has a StringLiteral init
    if (j.VariableDeclarator.check(parent.node)) {
      const init = parent.node.init;
      if (init?.type === "StringLiteral" && TEXT_COLOR_MAPPINGS[init.value]) {
        parent.node.init = j.stringLiteral(TEXT_COLOR_MAPPINGS[init.value]!);
      }
    }
    
    // Check if parent is a JSXAttribute and has a StringLiteral value
    if (j.JSXAttribute.check(parent.node)) {
      const value = parent.node.value;
      if (value?.type === "StringLiteral" && TEXT_COLOR_MAPPINGS[value.value]) {
        parent.node.value = j.stringLiteral(TEXT_COLOR_MAPPINGS[value.value]!);
      }
    }
  });

  // Handle StringLiterals in ternary expressions and other complex expressions
  root
    .find(j.StringLiteral)
    .filter(path => {
      // Check if this string literal should be transformed
      return TEXT_COLOR_MAPPINGS[path.node.value] !== undefined;
    })
    .forEach(path => {
      // Check if this is in a context related to background/bg
      let current = path.parent;
      let isBorderContext = false;
      
      // Traverse up to find if we're in a background-related context
      while (current && !isBorderContext) {
        if (j.JSXAttribute.check(current.node)) {
          const name = current.node.name;
          if (j.JSXIdentifier.check(name) && textColorRegex.test(name.name)) {
            isBorderContext = true;
          }
        } else if (j.Property.check(current.node)) {
          const key = current.node.key;
          if (j.Identifier.check(key) && textColorRegex.test(key.name)) {
            isBorderContext = true;
          }
        }
        current = current.parent;
      }
      
      if (isBorderContext) {
        path.node.value = TEXT_COLOR_MAPPINGS[path.node.value]!;
      }
    });


    // Handle StringLiterals in ternary expressions and other complex expressions
// root
//   .find(j.StringLiteral)
//   .forEach(path => {
//     const value = path.node.value;
    
//     // Check if this string literal matches any of our mappings
//     if (BG_COLOR_MAPPINGS[value]) {
//       path.node.value = BG_COLOR_MAPPINGS[value]!;
//     } else if (TEXT_COLOR_MAPPINGS[value]) {
//       path.node.value = TEXT_COLOR_MAPPINGS[value]!;
//     } else if (ICON_COLOR_MAPPINGS[value]) {
//       path.node.value = ICON_COLOR_MAPPINGS[value]!;
//     } else if (BORDER_COLOR_MAPPINGS[value]) {
//       path.node.value = BORDER_COLOR_MAPPINGS[value]!;
//     }
//   });
  


  return root.toSource();
};
