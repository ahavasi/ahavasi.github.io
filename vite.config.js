import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
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
