import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Keep build config minimal; test setup lives in vitest.config.ts.
export default defineConfig({
  plugins: [react()],
});
