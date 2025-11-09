import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,      // Split CSS by chunk for better caching
    minify: 'esbuild',       // Fastest minifier
    sourcemap: false,        // Disable for production
    chunkSizeWarningLimit: 600, // Avoid unnecessary warnings
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    open: true, // Auto open browser on dev start
    port: 5173, // Default port (change if needed)
  },
})
