import { join, resolve } from "node:path";
import process from "node:process";

import { glob } from "glob";
import { Options } from "jscodeshift";
import { run as jscodeshift } from "jscodeshift/src/Runner";

export async function run({ path, dry }: { path: string; dry: boolean }) {
  const transformPath = resolve(__dirname + "/transform.ts");
  const options: Options = {
    dry,
    // print: true,
    verbose: 1,
    parser: "tsx",
  };
  const searchPath = join(process.cwd(), path);
  const paths = await glob(
    searchPath.match(/\.(ts|tsx)$/)
      ? searchPath
      : `${searchPath}/**/*.{ts,tsx}`,
  );
  const pathsFiltered = paths.filter((path) => !path.match(/fixture.ts$/));
  const res = await jscodeshift(transformPath, pathsFiltered, options);
  return res;
}
