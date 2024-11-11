import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'build',
    emptyOutDir: false,
    rollupOptions:{
      input:{
        background: "./src/background/index.ts",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})