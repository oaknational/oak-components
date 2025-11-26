import { readFileSync } from "fs";
import { glob } from "glob";
import { join } from "path";
import { oakColorTokens } from "@/styles/theme/color";

// get all color token keys
const allColorTokens = Object.keys(oakColorTokens);

console.log("All oak color tokens:", allColorTokens.sort());
console.log("Total color tokens:", allColorTokens.length);

// helper script to find outstanding color tokens in the codebase
// it is basic so it will also print color tokens which don't need replacement, such us the ones used for colorFilter
async function findColorsTokens() {
  const searchPath = join(process.cwd(), "src/**/*.{ts,tsx}");
  const paths = await glob(searchPath);

  // filter out files containing ".theme" or "color.ts" in the name as we expect to see color tokens there
  const pathsFiltered = paths.filter(
    (path) => !path.includes(".theme") && !path.endsWith("color.ts"),
  );

  const foundColorTokens = new Map<string, string[]>();

  for (const filePath of pathsFiltered) {
    const content = readFileSync(filePath, "utf8");

    // search for each color in the file
    for (const color of allColorTokens) {
      // create regex to match the color as a string literal
      const regex = new RegExp(`["'\`]${color}["'\`]`, "g");
      if (regex.test(content)) {
        if (!foundColorTokens.has(color)) {
          foundColorTokens.set(color, []);
        }
        foundColorTokens.get(color)!.push(filePath);
      }
    }
  }

  console.log("\n=== Color tokens found in project ===\n");
  const sortedColors = Array.from(foundColorTokens.keys()).sort();

  for (const color of sortedColors) {
    const files = foundColorTokens.get(color)!;
    console.log(`\n${color} (${files.length} files):`);
    files.forEach((file) => console.log(`  - ${file}`));
  }

  console.log("\n=== Summary ===");
  console.log(
    `Colors found: ${foundColorTokens.size} / ${allColorTokens.length}`,
  );

  const notFound = allColorTokens.filter((c) => !foundColorTokens.has(c));
  if (notFound.length > 0) {
    console.log(`\nColors NOT found in project (${notFound.length}):`);
    notFound.sort().forEach((c) => console.log(`  - ${c}`));
  }
}

findColorsTokens();
