import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import playwright from 'eslint-plugin-playwright';
import path from 'node:path';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: path.resolve('./tsconfig.json'), // wymagane do rulek typu-aware
        tsconfigRootDir: path.resolve('./'),
      },
    },
    plugins: {
      prettier: prettierPlugin,
      playwright,
    },
    rules: {
      // Prettier STYLE
      'prettier/prettier': 'error',

      // DRY
      'no-duplicate-imports': 'error',

      // KISS, SRP
      complexity: ['warn', 5],
      'max-lines-per-function': ['warn', 50],
      'max-nested-callbacks': ['warn', 2],

      // YAGNI
      'no-unused-vars': 'error',

      // SOC, POM
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*'],
        },
      ],

      // ESLint Playwright + async
      '@typescript-eslint/require-await': 'error',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-page-pause': 'error',
    },
  },
];
