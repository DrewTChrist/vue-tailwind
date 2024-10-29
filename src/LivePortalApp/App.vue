<script setup>
import BasePortalView from '../BasePortalApp/BasePortalView.vue'
import { onMounted } from 'vue'
import { useLiveStore } from '@/stores/liveStore'

const liveStore = useLiveStore()

onMounted(() => {
  console.log(liveStore.data)
})
</script>

<template>
  <BasePortalView :title="liveStore.data.name" basePath="live" />
</template>
