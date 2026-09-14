import { relative } from "node:path";
import process from "node:process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { run } from "./index";

async function parse() {
  const argv = (await yargs(hideBin(process.argv))
    .usage(
      "$0 <path>",
      "Migrate from primitive colour tokens to the UI tokens.",
      (yargs) => {
        return yargs.positional("path", {
          type: "string",
          describe: "place to search for files",
          default: "./" + relative(process.cwd(), __dirname + "/../../../src"),
          required: true,
        });
      },
    )
    .option("restrict-to-oak-imports", {
      type: "boolean",
      describe:
        "Only update color values in components imported from oak-components",
    })
    .option("transform-parse-color", {
      type: "boolean",
      describe:
        "Only transform parseColor() function calls (for styled-components)",
    })
    .option("dry", {
      type: "boolean",
      describe: "dry run mode",
    })
    .help().argv) as unknown as {
    path: string;
    dry: boolean;
    restrictToOakImports?: boolean;
    transformParseColor?: boolean;
  };

  const res = run({
    path: argv.path,
    dry: argv.dry ?? false,
    restrictToOakImports: argv.restrictToOakImports ?? false,
    transformParseColor: argv.transformParseColor ?? false,
  });
  console.log(res);
}
parse();
