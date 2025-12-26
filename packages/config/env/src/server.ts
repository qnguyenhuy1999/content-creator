import { z } from 'zod';

export const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'development', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  API_PORT: z.coerce.number().default(4000),
  REDIS_URL: z.string().url().optional(),
  OPENAI_API_KEY: z.string().min(1),
  JWT_SECRET: z.string().min(10),
  ACCESS_TOKEN_COOKIE_NAME: z.string().min(3).default('sai.access-token'),
  REFRESH_TOKEN_COOKIE_NAME: z.string().min(3).default('sai.refresh-token'),
  ACCESS_TOKEN_TTL: z.coerce.number().default(3600), // in seconds
  REFRESH_TOKEN_TTL: z.coerce.number().default(86400), // in seconds
  EMAIL_VERIFICATION_TTL: z.coerce.number().default(86400),
  PASSWORD_RESET_TTL: z.coerce.number().default(3600),
  APP_URL: z.string().url().optional(),
  GOOGLE_CLIENT_ID: z.string().min(1).optional(),
  GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),
  GOOGLE_REDIRECT_URI: z.string().url().optional(),
  META_APP_ID: z.string().min(1).optional(),
  META_APP_SECRET: z.string().min(1).optional(),
  META_REDIRECT_URI: z.string().url().optional(),
  LINKEDIN_CLIENT_ID: z.string().min(1).optional(),
  LINKEDIN_CLIENT_SECRET: z.string().min(1).optional(),
  LINKEDIN_REDIRECT_URI: z.string().url().optional(),
  X_CLIENT_ID: z.string().min(1).optional(),
  X_CLIENT_SECRET: z.string().min(1).optional(),
  X_REDIRECT_URI: z.string().url().optional(),
  MAILTRAP_TOKEN: z.string().min(1).optional(),
  MAILTRAP_SENDER_EMAIL: z.string().email().optional(),
  MAILTRAP_SENDER_NAME: z.string().min(1).default('Social AI SaaS'),
  MAIL_PROVIDER: z.enum(['mailtrap', 'resend']).default('mailtrap'),
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  RESEND_FROM_NAME: z.string().min(1).default('Social AI SaaS'),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function loadServerEnv(env: NodeJS.ProcessEnv): ServerEnv {
  return serverEnvSchema.parse(env);
}
