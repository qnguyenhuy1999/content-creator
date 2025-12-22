# Scalable Monorepo Architecture

This repository is a **production-ready monorepo** designed for a B2C AI SaaS.
It prioritizes:

- Fast iteration for a solo founder
- Clean architectural boundaries
- Long-term scalability

---

## 🧰 Tooling

- pnpm
- Turborepo
- TypeScript
- NestJS
- React (Next.js + Vite)
- Prisma
- BullMQ + Redis
- Storybook

---

## 📁 Folder Structure

apps/

- web-landing/
- web-app/
- admin/
- api/
- admin-api/
- worker/

packages/

- config/
- database/
- ui/

---

## 🧩 Application Responsibilities

### web-landing

- Marketing pages
- SEO
- Pricing
- Authentication entry
- No business logic

### web-app

- Main customer-facing product
- Dashboards
- AI workflows
- Uses TanStack Router, Query, Form, Table

### admin

- Internal admin panel
- User management
- Billing & usage monitoring
- Cost & traffic control

### api

- Public-facing NestJS API
- Auth
- Core business logic
- Publishes events to BullMQ

### admin-api

- Admin-only APIs
- Metrics & system operations
- Separated for security

### worker

- Background jobs
- Emails
- Webhooks
- Async AI processing

---

## 📦 Shared Packages

### packages/ui

- Shared design system
- Stateless components
- Storybook-powered
- Used by all frontend apps

### packages/database

- Prisma schema
- Prisma client
- Migrations & seeds

### packages/config

- ESLint
- Prettier
- TypeScript config
- Zod env validation

---

## 🔒 Dependency Rules

| From     | Can Import          |
| -------- | ------------------- |
| apps     | packages only       |
| packages | other packages      |
| ui       | react + styles only |
| api      | database, config    |

---

## 🧠 Frontend Architecture

- Feature-based structure
- UI components from `packages/ui`
- API logic isolated per feature
- No cross-feature imports

---

## 🔁 Backend Architecture

- Domain-based NestJS modules
- Event-driven via BullMQ
- Workers handle side effects

---

## 🧪 Testing Strategy

- Unit tests for services & utils
- Integration tests for APIs
- E2E tests for critical paths
- Storybook for UI validation

---

## 📈 Scaling Strategy

### When traffic grows

- Add Redis & DB replicas
- Introduce rate limiting
- Cache heavy reads

### When team grows

- Split UI packages
- Introduce contracts package
- Enforce stricter boundaries

### When system grows

- Extract microservices
- Split workers by responsibility
- Add observability & tracing

---

## ❌ Anti-Patterns to Avoid

- Business logic in UI
- App-to-app imports
- Early microservices
- Over-abstraction

---

## 🎯 Design Philosophy

- Start simple
- Scale deliberately
- Optimize for clarity
- Protect developer velocity
