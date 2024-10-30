<script setup>
import DemoPortalApp from '@/DemoPortalApp/App.vue'
import { createApp, onMounted, onBeforeUnmount } from 'vue'
import { createPinia } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const createDemoPortalApp = () =>
  createApp(DemoPortalApp).use(createPinia()).use(router)

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
