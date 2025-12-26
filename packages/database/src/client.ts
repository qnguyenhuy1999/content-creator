import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv";
import { PrismaClient } from "../prisma/generated";

// Shared Prisma client instance for the entire package.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({ adapter });

export type { Prisma, PrismaClient } from "@prisma/client";
