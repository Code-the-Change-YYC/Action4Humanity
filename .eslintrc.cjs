/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const prettierConfig = require("./prettier.config.cjs");

const project = path.join(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:promise/recommended",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "promise",
    "mui-path-imports",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    eqeqeq: ["error", "smart"],
    "prettier/prettier": ["error", prettierConfig],
    "no-eval": "error",
    "no-var": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-restricted-imports": ["error", { patterns: [".*"] }],
    "mui-path-imports/mui-path-imports": "error",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off", // tcss prettier plugin handles this
    // https://github.com/orgs/react-hook-form/discussions/8622#discussioncomment-4060570
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};

module.exports = config;
