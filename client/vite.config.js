import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port của frontend
    proxy: {
      "/api": {
        target: "http://localhost:1313", // Địa chỉ backend
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ""), // Loại bỏ /api trong request đến backend
      },
    },
  },
});
