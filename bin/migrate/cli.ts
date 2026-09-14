#!/usr/bin/env ./node_modules/.bin/tsx
import process from "node:process";
import { run } from "./index";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { resolveWithExtension } from "./helper";
import { readdir } from "node:fs/promises";

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

  const transformPath = resolveWithExtension(__dirname + `/mods/${argv.mod}`);
  const result = run(transformPath, {
    path: argv.path,
    dry: argv.dry ?? false,
  });
  console.log(result);
}
parse();
