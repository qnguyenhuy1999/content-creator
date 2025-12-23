# @content-creator/database

Shared database package using Prisma ORM.

## Setup

1. Set your `DATABASE_URL` in `.env`:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

2. Generate Prisma Client:

   ```bash
   pnpm db:generate
   ```

3. Push schema to database (development):

   ```bash
   pnpm db:push
   ```

4. Or create a migration (recommended):
   ```bash
   pnpm db:migrate
   ```

## Scripts

- `pnpm db:generate` - Generate Prisma Client
- `pnpm db:push` - Push schema changes (dev only)
- `pnpm db:migrate` - Create and run migrations
- `pnpm db:migrate:deploy` - Run migrations in production
- `pnpm db:studio` - Open Prisma Studio GUI
- `pnpm db:seed` - Seed the database

## Usage

Import the Prisma client in your apps:

```ts
import { prisma } from "@content-creator/database";

const users = await prisma.user.findMany();
```

## Schema Management

Edit `prisma/schema.prisma` to define your models.

Always create migrations for schema changes:

```bash
pnpm db:migrate
```

## Best Practices

- Keep database logic in this package
- Export repository functions if needed
- Don't import business logic into this package
- Use transactions for multi-step operations
