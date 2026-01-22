import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; 

export default defineConfig({
  base: "./",
  plugins: [
    ViteImageOptimizer({
     
      webp: {
        quality: 80,
      },
    }),
  ], 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        foto: resolve(__dirname, "foto.html"),
        process: resolve(__dirname, "process.html"),
        pizzabot: resolve(__dirname, "pizzabot.html")
      }
    }
  }
});