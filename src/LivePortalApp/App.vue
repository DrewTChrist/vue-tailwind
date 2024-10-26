<script setup>
import BasePortalView from '../BasePortalApp/BasePortalView.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('LivePortalApp Mounted')
})
</script>

<template>
  <BasePortalView title="Live Portal" basePath="/portal" />
</template>
