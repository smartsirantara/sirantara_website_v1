import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4173,
    open: true, // Auto-open browser
  },
  assetsInclude: ['**/*.PNG', '**/*.png'],

  // Optimize Ant Design imports (critical for bundle size)
  optimizeDeps: {
    include: ['antd']
  },
  build: {
    outDir: 'dist', // Explicitly set output directory
    sourcemap: false, // Set to 'hidden' for production debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
        },
      },
    },
    minify: 'esbuild', // or 'esbuild' (faster but less aggressive)
    cssCodeSplit: true, // Separate CSS into individual files
  },
});