import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  //  checker({ typescript: true }) add in plugins for ts
  plugins: [react()],
  optimizeDeps: { esbuildOptions: { loader: { ".js": "jsx" } } },
});
