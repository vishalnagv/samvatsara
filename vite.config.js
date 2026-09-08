import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'samvatsara' below to your actual GitHub repo name
// so assets load correctly when hosted at https://<username>.github.io/<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: '/samvatsara/',
})
