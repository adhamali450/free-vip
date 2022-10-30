import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@sections": fileURLToPath(
        new URL("./src/components/sections", import.meta.url)
      ),
      "@controls": fileURLToPath(
        new URL("./src/components/controls", import.meta.url)
      ),
    },
  },
});
