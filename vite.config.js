import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-demo-portal': [
            './src/DemoPortalApp/DemoPortalView.vue',
            './src/DemoPortalApp/DemoPortalDashboardView.vue',
            './src/DemoPortalApp/DemoPortalReportingView.vue'
          ],
          'group-live-portal': [
            './src/LivePortalApp/LivePortalView.vue'
          ]
        }
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
