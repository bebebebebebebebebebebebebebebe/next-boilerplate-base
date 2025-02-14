import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import next from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import vitest from "@vitest/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    },
    ignores: [
      "node_modules/*",
    ],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
  },
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  next.configs.recommended,
  vitest.configs.recommended,
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  jsxA11y.configs.recommended,
  prettier.configs.recommended,
  tailwindcss.configs.recommended,
  testingLibrary.configs.react,
  jestDom.configs.recommended,
];

export default eslintConfig;
