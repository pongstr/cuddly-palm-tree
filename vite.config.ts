import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(join(process.cwd(), 'src')),
      pages: resolve(join(process.cwd(), 'src/pages')),
      components: resolve(join(process.cwd(), 'src/components')),
    },
  },
  plugins: [react()],
})
