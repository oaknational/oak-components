import { join, relative, resolve } from "node:path";
import process from "node:process";

import { glob } from "glob";
import { Options } from "jscodeshift";
import { run as jscodeshift } from "jscodeshift/src/Runner";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

async function run({
  path,
  dry,
  restrictToOakImports,
  transformParseColor,
}: {
  path: string;
  dry: boolean;
  restrictToOakImports?: boolean;
  transformParseColor?: boolean;
}) {
  const transformPath = transformParseColor
    ? resolve(__dirname + "/transformParseColor.ts")
    : resolve(__dirname + "/transform.ts");

  const options: Options = {
    dry,
    // print: true,
    verbose: 1,
    parser: "tsx",
    restrictToOakImports,
  };
  const searchPath = join(process.cwd(), path);
  const paths = await glob(
    searchPath.match(/\.(ts|tsx)$/)
      ? searchPath
      : `${searchPath}/**/*.{ts,tsx}`,
  );
  const pathsFiltered = paths.filter(
    (path) => !path.match(/fixture.ts$|theme.ts$|sdk.ts$/),
  );
  const res = await jscodeshift(transformPath, pathsFiltered, options);
  console.log(res);
}

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

  run({
    path: argv.path,
    dry: argv.dry ?? false,
    restrictToOakImports: argv.restrictToOakImports ?? false,
    transformParseColor: argv.transformParseColor ?? false,
  });
}
parse();
