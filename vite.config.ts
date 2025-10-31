import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "apple-touch-icon.png"],
      manifest: {
        name: "Note Be - Productivity & Notes",
        short_name: "NoteBe",
        description: "App de produtividade e notas com Pomodoro, Kaizen e mais.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "favicon.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "apple-touch-icon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  build: {
    outDir: "dist/public",
  },
  root: "client",
});
