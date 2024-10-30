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
          'components': [
            './src/components/BaseComponents/BaseButton.vue',
            './src/components/FlyoutMenu/FlyoutMenu.vue',
            './src/components/FlyoutMenu/FlyoutMenuItem.vue',
            './src/components/NavbarComponent/DarkModeToggler.vue',
            './src/components/NavbarComponent/NavbarComponent.vue',
            './src/components/NavbarComponent/NavbarLink.vue',
            './src/components/FooterComponent.vue',
            './src/views/BaseView.vue'
          ],
          'base-portal': [
            './src/BasePortalApp/BasePortalView.vue',
            './src/BasePortalApp/BasePortalConfigurationView.vue',
            './src/BasePortalApp/BasePortalDashboardView.vue',
            './src/BasePortalApp/BasePortalIntegrationsView.vue',
            './src/BasePortalApp/BasePortalReportingView.vue'
          ],
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
