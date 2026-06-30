import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import json from "@rollup/plugin-json";
import { join } from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const outputDir = join(import.meta.dirname, "/dist/npm/");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: join(outputDir, "es"),
        format: "es",
        preserveModules: true,
      },
      {
        dir: join(outputDir, "cjs"),
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      commonjs({
        requireReturnsDefault: "auto",
      }),
      typescript(),
      json(),
    ],
    external: ["next", "next/image", "react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [
      { file: `${outputDir}/es/types.d.ts`, format: "es" },
      { file: `${outputDir}/cjs/types.d.ts`, format: "cjs" },
    ],
    plugins: [
      resolve(),
      json(),
      typescriptPaths({ preserveExtensions: true }),
      dts(),
    ],
  },
];
