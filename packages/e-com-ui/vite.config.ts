import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    checker({ typescript: true }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui_lib",
      formats: ["es", "umd"],
      fileName: (format) => `ui_lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwind"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
