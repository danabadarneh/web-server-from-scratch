import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import securityPlugin from "eslint-plugin-security";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      js,
      "@typescript-eslint": tsPlugin,
      security: securityPlugin,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:security/recommended"
    ],
    rules: {
      // optional custom rules
    },
  },
];
