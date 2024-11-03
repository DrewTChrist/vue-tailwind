<script setup>
import { ref } from 'vue'
import BasePortalTopBar from '@/BasePortalApp/components/BasePortalTopBar.vue'
import BasePortalSideMenu from '@/BasePortalApp/components/BasePortalSideMenu.vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
  basePath: {
    type: String,
    required: true,
  },
})

const showMenu = ref(true)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-300 bg-white transition duration-300 dark:bg-gray-900"
  >
    <BasePortalTopBar v-model:toggle="toggleMenu" :title="title" />
    <div class="flex min-h-screen flex-col md:flex-row">
      <BasePortalSideMenu v-model:showMenu="showMenu" :basePath="basePath" />
      <div
        class="mx-2 mt-2 grow rounded-lg border border-gray-400 bg-gray-200 text-lg font-semibold transition duration-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        <RouterView name="portalContent" />
      </div>
    </div>
  </div>
</template>
