<script setup>
import { createApp, onMounted, onBeforeUnmount } from 'vue'
import LivePortalApp from '@/LivePortalApp/App.vue'
import { livePinia } from '@/main'
import { useRouter } from 'vue-router'

const router = useRouter()

const createLivePortalApp = () =>
  createApp(LivePortalApp).use(livePinia).use(router)

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
