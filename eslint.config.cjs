module.exports = [
  {
    files: ["src/**/*.ts"], // نفحص فقط ملفات TypeScript في src
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json", // هذا tsconfig الرئيسي
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-non-literal-regexp": "warn",
    },
  },
];
