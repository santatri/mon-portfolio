import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Pre-bundle the PDF renderer as one dependency graph. Yoga must not be
    // excluded: its browser entrypoint is CommonJS and needs Vite's transform.
    include: ["@react-pdf/renderer"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
