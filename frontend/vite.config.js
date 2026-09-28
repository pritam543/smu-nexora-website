import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages ke liye exact repository base path
  base: '/smu-nexora-website/',

  resolve: {
    alias: {
      // @ symbol se direct src folder ko import karne ke liye
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Production build ko fast aur optimized banane ke liye
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})