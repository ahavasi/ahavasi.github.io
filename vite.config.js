import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ahavasi.github.io/",
  publicDir: "public",
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    assetsDir: "assets",
    copyPublicDir: true,
    outDir: "dist",
  },
});
