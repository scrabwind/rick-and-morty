import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths({ extensions: ['.ts', '.vue'] })],
  base: '.',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/_variables.scss" as *;`
      }
    }
  }
})
