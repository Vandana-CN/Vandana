import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If you deploy to a repo that's NOT username.github.io,
// change base to '/<your-repo-name>/' (including the leading and trailing slash).
// Example: base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/', // use '/' for username.github.io; change for project repos
})
