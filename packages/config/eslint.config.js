/**
 * Shared ESLint configuration for the monorepo
 * Can be extended by apps and packages
 * Used by: web-landing, api, admin-api, ui
 */

import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/storybook-static/**',
      '**/.turbo/**',
      '**/coverage/**',
      '**/*.gen.ts',
      '**/*.gen.tsx',
    ],
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
