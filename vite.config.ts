import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/weather/',
  build: {
    emptyOutDir: false,
  },

  plugins: [vue()],

  resolve: {
    alias: {
      // @ts-ignore
      '~': path.resolve(__dirname, './src'),
    },
  },
})
