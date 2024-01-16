import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import optimizer from "vite-plugin-optimizer";
// eslint-disable-next-line import/no-unresolved
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
    optimizer({
      electron: `const { ipcRenderer } = require('electron'); export { ipcRenderer };`,
    }),
    UnoCSS(),
  ],
  resolve: {
    // extensions: [".ts", ".tsx"],
    alias: {
      client: "./client",
    },
  },
});
