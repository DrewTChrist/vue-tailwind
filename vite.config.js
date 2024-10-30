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
          'group-components': [
            './src/components/BaseComponents/BaseButton.vue',
            './src/components/FlyoutMenu/FlyoutMenu.vue',
            './src/components/FlyoutMenu/FlyoutMenuItem.vue',
            './src/components/NavbarComponent/DarkModeToggler.vue',
            './src/components/NavbarComponent/NavbarComponent.vue',
            './src/components/NavbarComponent/NavbarLink.vue',
            './src/components/FooterComponent.vue',
          ],
          'group-demo-portal': [
            './src/DemoPortalApp/DemoPortalView.vue',
            './src/DemoPortalApp/DemoPortalConfigurationView.vue',
            './src/DemoPortalApp/DemoPortalDashboardView.vue',
            './src/DemoPortalApp/DemoPortalIntegrationsView.vue',
            './src/DemoPortalApp/DemoPortalReportingView.vue'
          ],
          'group-live-portal': [
            './src/LivePortalApp/LivePortalView.vue',
            './src/LivePortalApp/LivePortalLoginView.vue',
            './src/LivePortalApp/LivePortalConfigurationView.vue',
            './src/LivePortalApp/LivePortalDashboardView.vue',
            './src/LivePortalApp/LivePortalIntegrationsView.vue',
            './src/LivePortalApp/LivePortalReportingView.vue'
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
