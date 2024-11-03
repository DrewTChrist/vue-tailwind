<script setup>
import { useDemoStore } from '@/stores/demoStore'
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
import BasePortalIntegrationsView from '@/BasePortalApp/BasePortalIntegrationsView.vue'

const demoStore = useDemoStore()
</script>

<template>
  <BasePortalIntegrationsView>
    <template v-slot:content>
      <div>
        <div class="mr-4 mt-4 flex flex-row justify-end">
          <BaseButton value="New Integration" />
        </div>
        <div class="no-scrollbar mx-4 h-screen overflow-y-auto">
          <ul role="list">
            <li
              v-for="integration in demoStore.integrations"
              :key="integration.id"
              class="mt-4 rounded-md border border-gray-400 bg-gray-50 px-2 shadow-md hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
            >
              <a href="#" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p
                      class="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-300"
                    >
                      {{ integration.name }}
                    </p>
                    <p
                      class="mt-1 truncate text-xs leading-5 text-gray-700 dark:text-gray-400"
                    >
                      Connector: {{ integration.connector }}
                    </p>
                  </div>
                </div>
                <div class="flex shrink-0 flex-col items-end">
                  <div class="flex items-center gap-x-1.5">
                    <p
                      class="text-xs leading-5 text-gray-700 dark:text-gray-300"
                    >
                      Status
                    </p>
                    <div
                      v-if="integration.status"
                      class="flex-none rounded-full bg-emerald-500/20 p-1"
                    >
                      <div
                        class="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      ></div>
                    </div>
                    <div
                      v-else
                      class="flex-none rounded-full bg-red-500/20 p-1"
                    >
                      <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <p
                    class="mt-1 text-xs leading-5 text-gray-800 dark:text-gray-400"
                  >
                    Last transaction
                    <time datetime="2023-01-23T13:23Z">{{
                      integration.lastTransaction
                    }}</time>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </BasePortalIntegrationsView>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
