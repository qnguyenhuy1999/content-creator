import { z } from 'zod';

const cookieNameSchema = z.string().min(3);

export const webEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  CORE_API_URL: z.string().url().default('http://localhost:3333'),
  ACCESS_TOKEN_COOKIE_NAME: cookieNameSchema.default('sai.access-token'),
  REFRESH_TOKEN_COOKIE_NAME: cookieNameSchema.default('sai.refresh-token'),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_GOOGLE_REDIRECT_URI: z
    .string()
    .url()
    .default('http://localhost:3000/auth/google/callback'),
  NEXT_PUBLIC_META_APP_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_META_REDIRECT_URI: z
    .string()
    .url()
    .default('http://localhost:3000/integrations/meta/callback'),
  NEXT_PUBLIC_LINKEDIN_CLIENT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_LINKEDIN_REDIRECT_URI: z
    .string()
    .url()
    .default('http://localhost:3000/integrations/linkedin/callback'),
  NEXT_PUBLIC_X_CLIENT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_X_REDIRECT_URI: z
    .string()
    .url()
    .default('http://localhost:3000/integrations/x/callback'),
});

export type WebEnv = z.infer<typeof webEnvSchema>;

export function loadWebEnv(env: NodeJS.ProcessEnv): WebEnv {
  return webEnvSchema.parse(env);
}
