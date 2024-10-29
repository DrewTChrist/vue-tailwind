import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useDemoStore = defineStore('demoStore', () => {
  const integrations = ref([
    {
      id: 0,
      name: 'ERP to CRM',
      connector: 'JDBC',
      lastTransaction: '3h ago',
      status: true,
    },
    {
      id: 1,
      name: 'CRM to ERP',
      connector: 'JDBC',
      lastTransaction: '3h ago',
      status: true,
    },
    {
      id: 2,
      name: 'ERP to CRM',
      connector: 'JDBC',
      lastTransaction: '1h ago',
      status: false,
    },
  ])

  const integrationsHealth = computed(() => {
    for (const integration in integrations) {
      if (!integration.status) {
        return false
      }
    }
    return true
  })

  return { integrations, integrationsHealth }
})
