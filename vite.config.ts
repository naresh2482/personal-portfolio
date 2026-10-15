import { existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Résumé links render only when public/resume.pdf is present.
  define: {
    __HAS_RESUME__: JSON.stringify(existsSync('public/resume.pdf')),
  },
});
