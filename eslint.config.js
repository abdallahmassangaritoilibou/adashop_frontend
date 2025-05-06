// eslint.config.js

// @ts-check
const eslint = require("@eslint/js");
const tsEslint = require("@typescript-eslint/eslint-plugin");
const tsConfigs = require("@typescript-eslint/eslint-plugin").configs;
const angularPlugin = require("@angular-eslint/eslint-plugin");
const angularTemplatePlugin = require("@angular-eslint/eslint-plugin-template");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsEslint,
      "@angular-eslint": angularPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      eslint.configs.recommended,
      tsConfigs.recommended,
      tsConfigs.stylistic,
      angularPlugin.configs["ts-recommended"],
      angularTemplatePlugin.configs["process-inline-templates"],
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "error",

      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
    },
  },

  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin,
      prettier: prettierPlugin,
    },
    extends: [
      angularTemplatePlugin.configs.recommended,
      angularTemplatePlugin.configs.accessibility,
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
