import { FileInfo, API } from "jscodeshift";

const allOakComponents = new Set<string>();

export default function (fileInfo: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root.find(j.ImportDeclaration).forEach((path) => {
    const source = path.node.source.value;

    // Check if importing from oak-components
    if (
      typeof source === "string" &&
      source.startsWith("@oaknational/oak-components")
    ) {
      path.node.specifiers?.forEach((spec) => {
        if (
          spec.type === "ImportSpecifier" ||
          spec.type === "ImportDefaultSpecifier"
        ) {
          const nameNode =
            spec.type === "ImportSpecifier" ? spec.imported : spec.local;
          const name = typeof nameNode === "string" ? nameNode : nameNode?.name;

          if (typeof name === "string") {
            allOakComponents.add(name);
          }
        }
      });
    }
  });

  return fileInfo.source;
}

export const parser = "tsx";

// This will run after all files have been processed
if (typeof process !== "undefined") {
  process.on("exit", () => {
    if (allOakComponents.size > 0) {
      console.log("\n=== Oak Components Used ===\n");
      Array.from(allOakComponents)
        .sort()
        .forEach((component) => {
          console.log(`  - ${component}`);
        });
      console.log(`\nTotal components: ${allOakComponents.size}`);
    }
  });
}
