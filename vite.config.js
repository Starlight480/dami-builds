import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base matches GitHub Pages repo name /dami-builds/
export default defineConfig({
  base: '/dami-builds/',
  build: { outDir: 'docs' },
  plugins: [react()],
})
