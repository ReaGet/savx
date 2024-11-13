import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'build',
    emptyOutDir: false,
    rollupOptions:{
      input:{
        content: "./src/content/index.ts",
      },
      output:{
        entryFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          return `assets/${assetInfo.name}`;
        }
      }
    },
  },
})