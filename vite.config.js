import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  
  define: {
    BASE: 'import.meta.env.BASE_URL' // <- make BASE always available
  },

})
