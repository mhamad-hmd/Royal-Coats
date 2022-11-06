import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
 
  ],
  root: path.resolve(__dirname,'./src'),
  build: {

    outDir: path.resolve(__dirname,'./royal-coats/assets'),
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions:{
        input:{
        index:path.resolve(__dirname, './src/index.ts') ,
        style: path.resolve(__dirname, './src/application.scss'),
        
     },
     output:{
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`


     }
    }
  }
})