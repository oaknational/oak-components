const importRules = {
  "import/first": "error",
  "import/no-unresolved": "error",
  "import/no-named-as-default": "off",
  "import/order": [
    "error",
    {
      "newlines-between": "always",
      warnOnUnassignedImports: true,
    },
  ],
  "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
};

/* eslint-env node */

module.exports = {
    root: true,
    env: {
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
    plugins: ["react", "react-hooks"],
    extends: [
      "eslint:recommended",
      "plugin:import/recommended",
      "prettier",
    ],
    rules: {
      ...importRules,
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
      "react/self-closing-comp": ["error", { component: true, html: true }],
    },
  // Put the Typescript config in an override, so we can still lint js files.
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        ...importRules,
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    {
      files: ["src/**/*.test.{js,ts,tsx}"],
      env: {
        jest: true,
      },
    }
  ],
};
