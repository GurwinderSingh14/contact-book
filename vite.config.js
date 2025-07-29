// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/contact-book/', // <-- use your repo name here
  plugins: [vue()],
})
