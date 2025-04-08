import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Configuration spécifique pour les assets
  assetsInclude: ['**/*.pdf'],
  
  define: {
    'process.env': {},
    'process.browser': true,
    'global': 'window',
  },
  
  
  
  build: {
    assetsInlineLimit: 0, // Important pour les fichiers PDF
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