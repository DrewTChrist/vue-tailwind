<script setup>
import { useDemoStore } from '@/stores/demoStore'
import BasePortalDashboardView from '@/BasePortalApp/BasePortalDashboardView.vue'

const demoStore = useDemoStore()
</script>

<template>
  <BasePortalDashboardView>
    <template v-slot:content>
      <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <div
          class="divide-y divide-inherit rounded-lg border border-gray-100 bg-gray-50 text-lg font-semibold sm:mr-2 md:mr-2 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100"
        >
          <div class="p-4"><p>Integrations Health</p></div>
          <div class="p-4">
            Failing Integrations:
            <ul>
              <li
                v-for="integration in demoStore.integrations.filter(
                  integration => !integration.status,
                )"
                :key="integration.id"
              >
                <div class="flex items-center gap-x-1.5">
                  {{ integration.name }}
                  <div
                    v-if="demoStore.integrationsHealth"
                    class="flex-none rounded-full bg-emerald-500/20 p-1"
                  >
                    <div class="h-2 w-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div v-else class="flex-none rounded-full bg-red-500/20 p-1">
                    <div class="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="divide-y divide-inherit rounded-lg border border-gray-100 bg-gray-50 text-lg font-semibold sm:mr-2 md:mr-2 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100"
        >
          <div class="p-4"><p>Section</p></div>
          <div class="p-4">Content</div>
        </div>
        <div
          class="divide-y divide-inherit rounded-lg border border-gray-100 bg-gray-50 text-lg font-semibold sm:mr-2 md:mr-2 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100"
        >
          <div class="p-4"><p>Section</p></div>
          <div class="p-4">Content</div>
        </div>
        <div
          class="divide-y divide-inherit rounded-lg border border-gray-100 bg-gray-50 text-lg font-semibold sm:mr-2 md:mr-2 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100"
        >
          <div class="p-4"><p>Section</p></div>
          <div class="p-4">Content</div>
        </div>
      </div>
    </template>
  </BasePortalDashboardView>
</template>
