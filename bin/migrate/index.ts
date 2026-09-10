#!/usr/bin/env ./node_modules/.bin/tsx
import process from "node:process";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { join, resolve } from "node:path";

import { glob } from "glob";
import { Options } from "jscodeshift";
import { run as jscodeshift } from "jscodeshift/src/Runner";
import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";

export async function run(
  transformPath: string,
  { path, dry }: { path: string; dry: boolean },
) {
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
  console.log(res);
}

// When we compile the code we end up with a .js file rather than a .ts file
function resolveWithExtension(file: string) {
  for (const ext of ["", ".js", ".ts", ".json"]) {
    const candidate = resolve(file + ext);

    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Cannot resolve ${file}`);
}

async function parse() {
  const mods = await readdir(__dirname + "/mods");

  const argv = (await yargs(hideBin(process.argv))
    .usage("$0 <mod> <path>", "Migrate to the new spacing tokens.", (yargs) => {
      return yargs
        .positional("mod", {
          type: "string",
          choices: mods,
          describe: "mod to apply",
          required: true,
        })
        .positional("path", {
          type: "string",
          describe: "place to search for files",
          default: process.cwd(),
          required: true,
        });
    })
    .option("dry", {
      type: "boolean",
      describe: "dry run mode",
    })
    .help().argv) as unknown as { mod: string; path: string; dry: boolean }; // Type hack

  const transformPath = resolveWithExtension(
    __dirname + `/mods/${argv.mod}/transform`,
  );
  run(transformPath, { path: argv.path, dry: argv.dry ?? false });
}
parse();
