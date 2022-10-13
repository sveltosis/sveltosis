import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@sveltosis/parser': path.resolve('./src'),
    },
  },
});
