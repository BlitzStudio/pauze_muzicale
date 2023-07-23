import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
    strictPort: true,
    open: "/",
  },
  build: {
    outDir: "../server/dist"
  }
});
