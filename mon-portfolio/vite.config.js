import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Cette ligne est cruciale
  
  server: {
    historyApiFallback: true, // Important pour le dev
  },
  
  assetsInclude: ['**/*.pdf'],
  define: {
    'process.env': {},
    'process.browser': true,
    'global': 'window',
  },
  
  build: {
    outDir: 'dist', // Explicitement défini
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.pdf')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});