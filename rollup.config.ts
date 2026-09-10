import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import json from "@rollup/plugin-json";
import path, { join } from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { globSync } from "glob";

const outputDir = join(import.meta.dirname, "/dist/npm/");

const binInput = Object.fromEntries(
  globSync(`./bin/migrate/**/*.ts`).map((file) => [
    // bin/migrate/migrations/foo.ts -> migrations/foo
    path.relative("bin/migrate", file.slice(0, -path.extname(file).length)),
    path.resolve(file),
  ]),
);

console.log(binInput);

const external = (id: string) =>
  !id.startsWith(".") &&
  !id.startsWith("/") &&
  !id.startsWith("@/") &&
  !id.startsWith("\0");

export default [
  {
    input: "./src/index.ts",
    external,
    output: [
      {
        dir: join(outputDir, "es"),
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      {
        dir: join(outputDir, "cjs"),
        format: "cjs",
        interop: "auto",
      },
    ],
    plugins: [
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "preferred",
      }),
      typescript(),
      json(),
      peerDepsExternal(),
    ],
  },
  {
    input: "./src/index.ts",
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
    external: ["next", "next/image", "react", "react-dom", "styled-components"],
  },
  {
    input: binInput,
    external,
    output: [
      {
        dir: `${outputDir}/bin/migrate`,
        format: "cjs",
        entryFileNames: "[name].js",
      },
    ],
    plugins: [
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "preferred",
      }),
      typescript(),
      json(),
      peerDepsExternal(),
    ],
  },
];
