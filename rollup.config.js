import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: "compat", // https://rollupjs.org/configuration-options/#output-interop - needed for nextjs
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "compat", // https://rollupjs.org/configuration-options/#output-interop - needed for nextjs
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ preferBuiltins: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      commonjs(),
      json(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [typescriptPaths({ preserveExtensions: true }), dts.default()],
  },
];
