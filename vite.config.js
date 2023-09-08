import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config
export default defineConfig(() => {
  return {
    base: '',
    plugins: [
      react(),
      legacy({
        renderModernChunks: false,
        polyfills: false,
      }),
    ],
  };
});
