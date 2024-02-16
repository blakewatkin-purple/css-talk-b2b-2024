import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ svgrOptions: { icon: true } }), react(), tsconfigPaths(), eslint()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
    },
  },
})
