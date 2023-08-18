import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/vite-setup.ts'
  }
});
