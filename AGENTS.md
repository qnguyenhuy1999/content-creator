# AI AGENT INSTRUCTIONS — MONOREPO ARCHITECTURE

You are an expert Staff Engineer helping build a scalable B2C SaaS monorepo.

This repository uses:

- pnpm
- Turborepo
- TypeScript everywhere
- NestJS (backend)
- React (Next.js + Vite)
- BullMQ + Redis
- Prisma
- Shared UI package with Storybook

Your primary goal is to:
✅ Maintain architectural boundaries  
✅ Avoid over-engineering  
✅ Keep the system scalable and maintainable

---

## 🧱 MONOREPO STRUCTURE

apps/

- web-landing → Next.js marketing site (SEO, auth entry)
- web-app → Vite + React customer product
- admin → Admin UI (internal)
- api → Public NestJS API
- admin-api → Admin-only NestJS API
- worker → BullMQ workers (email, events, async jobs)

packages/

- config → eslint, prettier, tsconfig, env validation (zod)
- database → prisma schema, client, migrations
- ui → shared UI components (storybook)

---

## 🚨 CRITICAL RULES (DO NOT VIOLATE)

### Import Rules

- apps ❌ MUST NOT import from other apps
- packages ❌ MUST NOT import from apps
- ui ❌ MUST NOT contain business logic
- ui ❌ MUST NOT call APIs or TanStack Query
- backend ❌ MUST NOT import frontend code

### UI PACKAGE RULES

Allowed:

- Presentational components
- Styling, tokens, icons
- Stateless logic

Forbidden:

- API calls
- Auth logic
- Feature-specific hooks
- Role-based logic

UI components MUST be reusable across:

- web-landing
- web-app
- admin

---

## 🧠 FRONTEND STRUCTURE RULES

### web-app (Vite + React)

Use feature-based structure:
features/
auth/
dashboard/
ai-tools/
settings/

Each feature may contain:

- components/
- hooks/
- services/
- routes.tsx

TanStack Query logic MUST live inside feature folders.

---

## 🧠 BACKEND STRUCTURE RULES

### apps/api & apps/admin-api

Use domain-based modules:
modules/
auth/
user/
billing/
ai/
usage/

- Controllers handle HTTP only
- Services handle business logic
- Repositories interact with database
- Events published via BullMQ only

---

## 🔁 EVENT-DRIVEN ARCHITECTURE

- API publishes events to BullMQ
- Worker consumes events
- Worker handles:
  - emails
  - webhooks
  - async AI jobs

API MUST NOT:

- send emails directly
- run long tasks synchronously

---

## 🧪 TESTING STRATEGY

- Unit tests: services, utils
- Integration tests: API + database
- E2E tests: critical flows only
- UI: Storybook for visual testing

---

## 🧱 SCALING GUIDELINES

When the app grows:

- Split ui → ui-core / ui-admin / ui-app
- Split api into microservices ONLY when forced
- Add contracts package for DTOs & events
- Add observability before scaling infra

---

## ❌ ANTI-PATTERNS

- Sharing code via copy-paste
- Feature logic inside ui package
- Tight coupling between apps
- Overusing microservices early
- Over-abstracting too early

---

## 🧭 DECISION PRIORITY

1. Developer velocity
2. Clarity > cleverness
3. Explicit > implicit
4. Scale when necessary, not earlier

Always follow these rules when generating or modifying code.
