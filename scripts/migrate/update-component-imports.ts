import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { componentImportMap } from "./component-import-map";

export default function transform(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  let changed = false;

  root.find(j.ImportDeclaration).forEach((path) => {
    const source = path.node.source.value;
    if (typeof source !== "string") return;

    // Exact matches
    if (componentImportMap[source]) {
      // path.node.source.value = componentImportMap[source];
      changed = true;
      return;
    }

    // Barrel-style imports (e.g. "@/components/atoms")
    Object.entries(componentImportMap).forEach(([from, to]) => {
      const fromDir = from.split("/").slice(0, -1).join("/");
      const toDir = to.split("/").slice(0, -1).join("/");
      if (source.includes(fromDir) && fromDir !== toDir) {
        path.node.source.value = source.replace(fromDir, toDir);
        changed = true;
      }
    });
  });

  return changed ? root.toSource() : null;
}
