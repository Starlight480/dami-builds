import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change base to match your GitHub Pages repo name, e.g. '/dami-builds/'
export default defineConfig({
  base: '/dami-builds/',
  plugins: [react()],
})
