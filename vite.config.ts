// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole(),
    dts({
      insertTypesEntry: true,
      include: [
        // "./src/entry.ts",
        // "./src/entry.esm.ts",
        "./src/lib-components/*.vue",
        "./src/lib-components/*.ts",
      ],
      outputDir: "dist/types",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/lib-components/index.ts"),
      name: "VueNumLocaleInput",
      fileName: "vue-num-locale-input",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
