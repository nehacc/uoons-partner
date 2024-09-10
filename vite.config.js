import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // This will open the browser on server start
  },
  build: {
    outDir: 'public/js', // Outputs the build files to Laravel's public/js directory
  },
  root: 'resources', // Assuming your index.html is in the resources directory
  publicDir: 'public', // Public directory for static assets
});
