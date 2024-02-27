import { defineConfig } from "vite";
import { resolve } from "node:path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      client: resolve(process.cwd()),
    },
  },
});
