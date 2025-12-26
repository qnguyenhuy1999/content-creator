import { z } from 'zod';

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export function loadClientEnv(env: NodeJS.ProcessEnv): ClientEnv {
  return clientEnvSchema.parse(env);
}
