import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/E-Commerce-Dubai/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})