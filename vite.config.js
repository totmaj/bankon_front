import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 this opens the app on http://localhost:3000import.meta.env.VITE_API_URL
  },
  resolve: {
    alias: {
      "@": "/src", // Optional but recommended
    },
  },
});
