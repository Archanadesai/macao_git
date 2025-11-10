import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // project root
  build: {
    outDir: "template",
    rollupOptions: {
      input: "template/index.html",
    },
  },
  server: {
    port: 3000,
    open: "/template/index.html",
    watch: {
      usePolling: true, // ensures file changes trigger reload everywhere
    },
  },
});
