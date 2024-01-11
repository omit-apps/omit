import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import optimizer from "vite-plugin-optimizer";
// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
    optimizer({
      electron: `const { ipcRenderer } = require('electron'); export { ipcRenderer };`,
    }),
  ],
});
