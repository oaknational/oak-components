import { FileInfo, API } from "jscodeshift";
import {
  TEXT_COLOR_MAPPINGS,
  BG_COLOR_MAPPINGS,
  BORDER_COLOR_MAPPINGS,
  ICON_COLOR_MAPPINGS,
} from "./colorMappings";

function getMappingForPropertyName(
  propName: string,
): Record<string, string> | null {
  if (/background|boxShadow/i.test(propName)) {
    return BG_COLOR_MAPPINGS;
  } else if (/border|stroke/i.test(propName)) {
    return BORDER_COLOR_MAPPINGS;
  } else if (/^color$/i.test(propName)) {
    return TEXT_COLOR_MAPPINGS;
  }
  return null;
}

function getMappingFromObjectProperty(
  parent: any,
  j: any,
): Record<string, string> | null {
  if (j.Property.check(parent.node) && j.Identifier.check(parent.node.key)) {
    return getMappingForPropertyName(parent.node.key.name);
  }
  return null;
}

function getMappingFromTemplateLiteral(
  parent: any,
  path: any,
  j: any,
): Record<string, string> | null {
  if (!j.TemplateLiteral.check(parent.node)) {
    return null;
  }

  const templateLiteral = parent.node;
  const quasisIndex = templateLiteral.expressions.indexOf(path.node);

  for (let i = quasisIndex; i >= 0; i--) {
    const cssText = templateLiteral.quasis[i].value.raw;
    const match = cssText.match(/([a-z-]+)\s*:\s*[^:]*$/i);
    if (match) {
      const mapping = getMappingForPropertyName(match[1]);
      if (mapping) {
        return mapping;
      }
    }
  }
  return null;
}

export default function (file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Combine all mappings for parseColor
  const ALL_COLOR_MAPPINGS = {
    ...TEXT_COLOR_MAPPINGS,
    ...BG_COLOR_MAPPINGS,
    ...BORDER_COLOR_MAPPINGS,
    ...ICON_COLOR_MAPPINGS,
  };

  // Only replace values inside parseColor("") calls
  root
    .find(j.CallExpression)
    .filter(
      (path) =>
        j.Identifier.check(path.node.callee) &&
        path.node.callee.name === "parseColor" &&
        path.node.arguments.length === 1 &&
        j.StringLiteral.check(path.node.arguments[0]),
    )
    .forEach((path) => {
      const parent = path.parent;
      const mappings =
        getMappingFromObjectProperty(parent, j) ||
        getMappingFromTemplateLiteral(parent, path, j) ||
        ALL_COLOR_MAPPINGS;

      const arg = path.node.arguments[0];
      if (j.StringLiteral.check(arg) && arg.value) {
        const newValue = mappings[arg.value];
        if (newValue !== undefined) {
          arg.value = newValue;
        }
      }
    });

  return root.toSource();
}
