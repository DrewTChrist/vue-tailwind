<script setup>
import BasePortalView from '../BasePortalApp/BasePortalView.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('DemoPortalApp Mounted')
})
</script>

<template>
  <BasePortalView title="Demo Portal" basePath="/demo" />
</template>
