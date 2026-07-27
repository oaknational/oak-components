#!/usr/bin/env ./node_modules/.bin/tsx
import { relative } from "node:path";
import process from "node:process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { run } from "./index";

async function parse() {
  const argv = (await yargs(hideBin(process.argv))
    .usage("$0 <path>", "Migrate <OakSvg/> to new name usage", (yargs) => {
      return yargs.positional("path", {
        type: "string",
        describe: "place to search for files",
        default: "./" + relative(process.cwd(), __dirname + "/../../../src"),
        required: true,
      });
    })
    .option("dry", {
      type: "boolean",
      describe: "dry run mode",
    })
    .help().argv) as unknown as { path: string; dry: boolean }; // Type hack

  const res = run({ path: argv.path, dry: argv.dry ?? false });
  console.log(res);
}
parse();
