// eslint.config.js
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Подключаем совместимость с классическими конфигами (Next.js, TypeScript)
  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic'
  ),

  // Storybook support
  ...storybook.configs['flat/recommended'],

  // Основные правила
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Типовые предупреждения
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // Не нужен в Next.js
      "@typescript-eslint/consistent-type-definitions": "off"
    },
  },

  // JS/TS/JSX общие правила
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-debugger': 'warn',
    },
  },
];
