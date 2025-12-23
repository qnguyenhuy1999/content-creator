import { z } from 'zod';

/**
 * Shared environment variable validation using Zod
 * Apps can extend this schema with their specific env vars
 */

export const createEnv = <T extends z.ZodRawShape>(schema: T) => {
  const envSchema = z.object(schema);

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    );
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
};

/**
 * Example: Common environment variables
 */
export const commonEnvSchema = {
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
};

/**
 * Example: Database environment variables
 */
export const databaseEnvSchema = {
  DATABASE_URL: z.string().url(),
};

/**
 * Example: Redis environment variables
 */
export const redisEnvSchema = {
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),
};
