import type { API, FileInfo, JSCodeshift, JSXAttribute } from "jscodeshift";

const COMPONENTS_IMPORT = "@oaknational/oak-components";

const MAPPINGS: Record<string, string> = {
  "header-underline": "HeaderUnderline",
  underline: "Underline",
  "horizontal-rule": "HorizontalRule",
  "underline-3": "Underline3",
  "button-border-top": "ButtonBorderTop",
  "button-border-bottom": "ButtonBorderBottom",
  "button-border-left": "ButtonBorderLeft",
  "button-border-right": "ButtonBorderRight",
  "icon-background": "IconBackground",
  scribble: "Scribble",
};

function getReplacementName(value: JSXAttribute["value"]): string | undefined {
  // Handles: <OakSvg name="oldIcon" />
  if (value?.type === "StringLiteral") {
    return MAPPINGS[value.value];
  }

  // Depending on the parser, JSX strings may be represented as Literal.
  if (value?.type === "Literal" && typeof value.value === "string") {
    return MAPPINGS[value.value];
  }

  // Handles: <OakSvg name={"oldIcon"} />
  if (
    value?.type === "JSXExpressionContainer" &&
    value.expression.type === "StringLiteral"
  ) {
    return MAPPINGS[value.expression.value];
  }

  return undefined;
}

function addImports(
  j: JSCodeshift,
  root: ReturnType<JSCodeshift>,
  names: Set<string>,
) {
  if (names.size === 0) {
    return;
  }

  const existingImports = root.find(j.ImportDeclaration, {
    source: {
      value: COMPONENTS_IMPORT,
    },
  });

  if (existingImports.size() > 0) {
    existingImports.forEach((path) => {
      const specifiers = path.node.specifiers ?? [];

      const importedNames = new Set(
        specifiers
          .filter(
            (specifier) =>
              specifier.type === "ImportSpecifier" &&
              specifier.imported.type === "Identifier",
          )
          .map((specifier) =>
            specifier.type === "ImportSpecifier" &&
            specifier.imported.type === "Identifier"
              ? specifier.imported.name
              : undefined,
          )
          .filter((name): name is string => name !== undefined),
      );

      for (const name of names) {
        if (!importedNames.has(name)) {
          specifiers.push(j.importSpecifier(j.identifier(name)));
        }
      }

      path.node.specifiers = specifiers;
    });

    return;
  }

  const newImport = j.importDeclaration(
    [...names].sort().map((name) => j.importSpecifier(j.identifier(name))),
    j.stringLiteral(COMPONENTS_IMPORT),
  );

  const firstImport = root.find(j.ImportDeclaration).at(0);

  if (firstImport.size() > 0) {
    firstImport.insertBefore(newImport);
  } else {
    root.get().node.program.body.unshift(newImport);
  }
}

export default function transform(fileInfo: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  const importsToAdd = new Set<string>();

  root
    .find(j.JSXOpeningElement, {
      name: {
        type: "JSXIdentifier",
        name: "OakSvg",
      },
    })
    .forEach((path) => {
      for (const attribute of (path && path.node.attributes) || []) {
        if (
          attribute.type !== "JSXAttribute" ||
          attribute.name.type !== "JSXIdentifier" ||
          attribute.name.name !== "name"
        ) {
          continue;
        }

        const replacementName = getReplacementName(attribute.value);

        if (!replacementName) {
          continue;
        }

        attribute.value = j.jsxExpressionContainer(
          j.identifier(replacementName),
        );

        importsToAdd.add(replacementName);
      }
    });

  addImports(j, root, importsToAdd);

  return root.toSource({
    quote: "double",
  });
}
