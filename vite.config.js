import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    proxy: {
      "/list": "http://localhost:3001",
      "/images": "http://localhost:3001",
    }
  },
});
