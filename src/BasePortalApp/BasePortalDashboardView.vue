<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('BasePortalDashboardView Mounted')
})
</script>

<template>
  <div class="divide-y dark:divide-gray-700">
    <div class="p-4">
      <h2
        class="p-1 text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight dark:text-gray-100"
      >
        Dashboard
      </h2>
    </div>
    <slot name="content" />
  </div>
</template>
