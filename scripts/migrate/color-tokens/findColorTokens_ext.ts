import { readFileSync, statSync } from "fs";
import { glob } from "glob";
import { join } from "path";

// Hardcoded oak color tokens
const oakColorTokens = {
  white: "#ffffff",
  grey10: "#f9f9f9",
  grey20: "#f2f2f2",
  grey30: "#e4e4e4",
  grey40: "#cacaca",
  grey50: "#808080",
  grey60: "#575757",
  grey70: "#2d2d2d",
  grey80: "#1b1b1b",
  black: "#222222",
  oakGreen: "#287c34",
  mint: "#bef2bd",
  mint30: "#ebfbeb",
  mint50: "#dff9de",
  mint110: "#93e892",
  aqua: "#b0e2de",
  aqua30: "#e7f6f5",
  aqua50: "#d7f1ef",
  aqua110: "#7cd8d0",
  lavender: "#a0b6f2",
  lavender30: "#e3e9fb",
  lavender50: "#bdcdf5",
  lavender110: "#7c9aec",
  pink: "#deb7d5",
  pink30: "#f5e9f2",
  pink50: "#efdbea",
  pink110: "#cf9cc3",
  lemon: "#ffe555",
  lemon30: "#fff7cc",
  lemon50: "#fff2aa",
  lemon110: "#fbd60e",
  amber: "#ff934e",
  amber30: "#ffece0",
  amber50: "#ffc8a6",
  red: "#dd0035",
  red30: "#f8d8e0",
  red50: "#ee809a",
  navy: "#0d24c4",
  navy110: "#0a1d9d",
  navy120: "#081676",
  blue: "#374cf1",
  magenta: "#d02aa7",
  purple: "#845ad9",
  teal: "#037b7d",
  blackSemiTransparent: "#22222240",
  transparent: "transparent",
  "rpf-syntax-blue": "#9EE8FF",
  "rpf-syntax-green": "#94F9AF",
  "rpf-syntax-grey": "#FBFBFB",
  "rpf-syntax-pink": "#EECCFF",
};

const allColorTokens = Object.keys(oakColorTokens);

async function findColorsTokens() {
  console.log(
    `Searching for ${allColorTokens.length} color tokens in codebase...\n`,
  );

  const searchPath = join(process.cwd(), "src/**/*.{ts,tsx,js,jsx}");
  const paths = await glob(searchPath);

  const pathsFiltered = paths
    .filter((p) => !p.includes(".theme") && !p.endsWith("color.ts"))
    .filter((p) => {
      try {
        return statSync(p).isFile();
      } catch {
        return false;
      }
    });

  const foundColorTokens = new Map<string, string[]>();

  for (const filePath of pathsFiltered) {
    try {
      const content = readFileSync(filePath, "utf8");

      for (const color of allColorTokens) {
        const regex = new RegExp(`["'\`]${color}["'\`]`, "g");
        if (regex.test(content)) {
          if (!foundColorTokens.has(color)) {
            foundColorTokens.set(color, []);
          }
          foundColorTokens.get(color)!.push(filePath);
        }
      }
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
    }
  }

  console.log("=== Color tokens found in project ===\n");

  if (foundColorTokens.size === 0) {
    console.log("No color tokens found.");
    return;
  }

  Array.from(foundColorTokens.keys())
    .sort()
    .forEach((color) => {
      const files = foundColorTokens.get(color)!;
      console.log(`\n${color} (${files.length} files):`);
      files.forEach((file) => console.log(`  - ${file}`));
    });

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
