<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { createDemoPortalApp } from '@/main'

const demoPortalApp = createDemoPortalApp()

onMounted(() => {
  demoPortalApp.mount('#demoPortalApp')
})

onBeforeUnmount(() => {
  demoPortalApp.unmount()
})
</script>

<template>
  <div id="demoPortalApp"></div>
</template>
