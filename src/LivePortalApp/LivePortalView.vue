<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { createLivePortalApp } from '@/main'

const livePortalApp = createLivePortalApp()

onMounted(() => {
  livePortalApp.mount('#livePortalApp')
})

onBeforeUnmount(() => {
  livePortalApp.unmount()
})
</script>

<template>
  <div id="livePortalApp"></div>
</template>
