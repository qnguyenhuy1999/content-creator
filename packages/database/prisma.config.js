module.exports = {
  datasource: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:1234@localhost:5432/content_creator_dev?schema=public",
  },
  migrations: {
    seed: "node -r tsconfig-paths/register -r ts-node/register prisma/seed.ts",
  },
};
