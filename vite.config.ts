import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'public/manifest.json'),
          dest: '.'
        },
      ],
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    },
  },
})