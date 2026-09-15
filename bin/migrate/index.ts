#!/usr/bin/env ./node_modules/.bin/tsx
import process from "node:process";
import { join } from "node:path";

import { glob } from "glob";
import { Options } from "jscodeshift";
import { run as jscodeshift } from "jscodeshift/src/Runner";

export async function run(
  transformPath: string,
  {
    path,
    dry,
    silent = false,
  }: { path: string; dry: boolean; silent?: boolean },
) {
  const options: Options = {
    dry,
    print: false,
    verbose: 0,
    silent,
    parser: "tsx",
  };
  const searchPath = path.startsWith("/") ? path : join(process.cwd(), path);
  const paths = await glob(
    searchPath.match(/\.(ts|tsx)$/)
      ? searchPath
      : `${searchPath}/**/*.{ts,tsx}`,
  );
  const pathsFiltered = paths.filter((path) => !path.match(/fixture.ts$/));
  const res = await jscodeshift(transformPath, pathsFiltered, options);
}
