# @content-creator/config

Shared configuration package for the monorepo.

## Contents

- **ESLint** - Shared linting rules
- **Prettier** - Code formatting configuration
- **TypeScript** - Base tsconfig
- **Environment Validation** - Zod schemas for env variables

## Usage

### ESLint

```js
// In your app's eslint.config.js
import sharedConfig from '@content-creator/config/eslint';

export default [
  ...sharedConfig,
  // Your app-specific rules
];
```

### Prettier

```js
// In your app's prettier.config.js
import sharedConfig from '@content-creator/config/prettier';

export default sharedConfig;
```

### TypeScript

```json
// In your app's tsconfig.json
{
  "extends": "@content-creator/config/typescript",
  "compilerOptions": {
    // Your overrides
  }
}
```

### Environment Variables

```ts
import {
  createEnv,
  commonEnvSchema,
  databaseEnvSchema,
} from '@content-creator/config/env';

const env = createEnv({
  ...commonEnvSchema,
  ...databaseEnvSchema,
  // Your app-specific env vars
  API_KEY: z.string(),
});
```
