<script setup>
import BasePortalDashboardView from '@/BasePortalApp/BasePortalDashboardView.vue'
</script>

<template>
  <BasePortalDashboardView>
    <template v-slot:content>
      <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
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
