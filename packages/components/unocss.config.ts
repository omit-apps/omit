import { defineConfig } from "unocss";
import UnoCSSWindPreset from "@unocss/preset-wind";

export default defineConfig({
  presets: [UnoCSSWindPreset()],
  theme: {
    colors: {
      "polar-night-black": {
        DEFAULT: "#333",
      },
    },
  },
});
