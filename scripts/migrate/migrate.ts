#!/usr/bin/env node
import { relative } from "node:path";
import process from "node:process";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// TODO: Uncomment these lines when we've made these no-ops
// import { run as transformColortokens } from "./1_color-tokens/index";
// import { run as transformSpacingTokens } from "./2_spacing-tokens/index";
import { run as transformTreeShakable } from "./3_svg-tree-shakable/index";

async function parse() {
  const argv = (await yargs(hideBin(process.argv))
    .usage("$0 <path>", "Migrate to the new spacing tokens.", (yargs) => {
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

  const steps = [
    // { fn: transformColortokens, name: "Color Tokens" },
    // { fn: transformSpacingTokens, name: "Spacing Tokens" },
    { fn: transformTreeShakable, name: "Tree Shakable SVGs" },
  ];

  for (const step of steps) {
    console.log(`Running '${step.name}' migration...`);
    const res = await step.fn({ path: argv.path, dry: argv.dry ?? false });
    console.log(res);
  }
}
parse();
