import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'   // ← fix this line

export default defineConfig({
  plugins: [react(), tailwindcss()],
})