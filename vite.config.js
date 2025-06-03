import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 this opens the app on http://localhost:3000import.meta.env.VITE_API_URL
    proxy: {
      "/api": {
        target: "https://w.bankon.click",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Keep /api in the target URL
        secure: false, // Keep SSL verification for production-like environment
        // Additional headers if needed
        headers: {
          "X-Forwarded-Host": "localhost:3000",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Optional but recommended
    },
  },
});
