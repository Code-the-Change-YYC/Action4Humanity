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
  plugins: ["@typescript-eslint", "simple-import-sort", "promise"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
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
    eqeqeq: ["error", "smart"],
    "prettier/prettier": ["error", prettierConfig],
    "no-eval": "error",
    "no-var": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

module.exports = config;
