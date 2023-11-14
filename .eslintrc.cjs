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

const defaultConfig = {
  plugins: ["react", "react-hooks"],
  extends: ["eslint:recommended", "plugin:import/recommended",  "prettier"],
  rules: {
    ...importRules,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
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

  // Put the Typescript config in an override, so we can still lint js files.
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      plugins: [...defaultConfig.plugins, "@typescript-eslint"],
      extends: [
        ...defaultConfig.extends,
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
    },
    {
      files: ["src/**/*.mdx"],
      extends: ["plugin:mdx/recommended"],
      settings: {
        "mdx/code-blocks": true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        "mdx/language-mapper": {}
      }
    }
  ],
};
