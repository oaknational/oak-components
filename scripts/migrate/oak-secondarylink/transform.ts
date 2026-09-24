import { FileInfo, API } from "jscodeshift";

export default function (fileInfo: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(fileInfo.source);

  // Replace <OakSecondaryLink> with <OakLink variant="secondary">
  root
    .find(j.JSXElement, {
      openingElement: {
        name: {
          type: "JSXIdentifier",
          name: "OakSecondaryLink",
        },
      },
    })
    .replaceWith(({ value }) => {
      const existingAttributes =
        value.openingElement.attributes?.filter(
          (attribute) =>
            !(
              attribute.type === "JSXAttribute" &&
              attribute.name.name === "variant"
            ),
        ) ?? [];

      const openingElement = j.jsxOpeningElement(
        j.jsxIdentifier("OakLink"),
        [
          ...existingAttributes,
          j.jsxAttribute(
            j.jsxIdentifier("variant"),
            j.stringLiteral("secondary"),
          ),
        ],
        value.openingElement.selfClosing,
      );

      const closingElement = value.openingElement.selfClosing
        ? null
        : j.jsxClosingElement(j.jsxIdentifier("OakLink"));

      return j.jsxElement(openingElement, closingElement, value.children);
    });

  // Update import:
  // OakSecondaryLink -> OakLink
  root
    .find(j.ImportDeclaration, {
      source: {
        value: "@oaknational/oak-components",
      },
    })
    .forEach((path) => {
      const specifiers = path.value.specifiers ?? [];

      const hasOakLink = specifiers.some(
        (specifier) =>
          specifier.type === "ImportSpecifier" &&
          specifier.imported.name === "OakLink",
      );

      path.value.specifiers = specifiers.flatMap((specifier) => {
        if (
          specifier.type === "ImportSpecifier" &&
          specifier.imported.name === "OakSecondaryLink"
        ) {
          // If OakLink is already imported, just remove OakSecondaryLink.
          if (hasOakLink) {
            return [];
          }

          // Otherwise replace it in-place, preserving import ordering.
          return [j.importSpecifier(j.identifier("OakLink"))];
        }

        return [specifier];
      });
    });

  return root.toSource();
}
