import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import json from "@rollup/plugin-json";
import { nodeExternals } from "rollup-plugin-node-externals";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        format: "es",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        interop: "compat",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        interop: "compat",
      },
    ],
    plugins: [
      // peerDepsExternal(),
      nodeExternals({
        devDeps: true,
        peerDeps: true,
        deps: true,
      }),
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
    plugins: [typescriptPaths({ preserveExtensions: true }), dts()],
  },
];
