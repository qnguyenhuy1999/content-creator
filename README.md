# Content Creator Monorepo

## Policy

- Exact runtime/build-output pins: react 18.3.1, react-dom 18.3.1, next 14.2.7, @nestjs/common|core|platform-express 10.3.8, tailwindcss 4.0.0, postcss 8.4.47, autoprefixer 10.4.20.
- Tooling stays on tilde (~) for safe patches: TypeScript, Vite, Turbo, Biome, ESLint, Jest, Prettier, Playwright, Storybook, Testing Library.
- Hybrid lint: Biome (apps/web-app, apps/admin, packages/ui); ESLint (apps/web-landing, apps/api, apps/admin-api, apps/worker).
- Workspace: pnpm hoisted linker; keep pnpm-workspace as-is (no public-hoist-pattern).
- Runtime-adjacent/integrations (swagger, config, terminus, bullmq, ioredis, prisma, auth libs, axios, zod) stay on tilde/caret unless breakage demands pinning.

## Linting Split

- Biome: apps/web-app, apps/admin, packages/ui.
- ESLint: apps/web-landing, apps/api, apps/admin-api, apps/worker.

## Scripts

- `pnpm bootstrap` – local install.
- `pnpm install:ci` – install with frozen lockfile.
- `pnpm dev|build|lint|test|format|typecheck` – orchestrated via turbo.
- `pnpm clean` – remove node_modules/dist/build/.turbo across workspaces.
- `pnpm prepare` – runs turbo lint.

See AGENTS.md and MONOREPO_ARCHITECTURE.md for architecture rules.
