module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" }, modules: "commonjs" },
    ],
    ["@babel/preset-typescript"],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
      },
    ],
    ["@babel/plugin-transform-runtime"],
  ],
};
