import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // localhost
  // base: "/",
  // production
  // base: "/basiir/test11/",
  base: "/basiir/test12/",
});
