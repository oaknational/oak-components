import { resolve } from "node:path";
import { existsSync } from "node:fs";

// When we compile the code we end up with a .js file rather than a .ts file
export function resolveWithExtension(file: string) {
  for (const ext of ["", ".js", ".ts", ".json"]) {
    const candidate = resolve(file + ext);

    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Cannot resolve ${file}`);
}
