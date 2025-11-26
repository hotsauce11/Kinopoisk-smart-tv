import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel автоматически раздаёт проект с корня ("/")
// поэтому base должен быть строго "/"
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1600,
  },
  server: {
    host: true,
  },
});



