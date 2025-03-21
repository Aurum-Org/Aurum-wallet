import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNativePlugin from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  // Test files configuration
  {
    files: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx", "**/*-test.js"],
    languageOptions: {
      globals: {
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },
  prettierConfig,
  {
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      ".expo/",
      ".expo-shared/",
      "coverage/",
      "android/",
      "ios/",
      "web-build/",
      "*.log",
      "*.lock",
      "metro.config.js",
      "babel.config.js",
      "jest.config.js",
    ],
  },
];
