<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps(['toggle', 'linkText', 'routeName', 'path'])
const route = useRoute()

const isRoute = computed(() => route.name == props.routeName)

const linkStyle = computed(() => {
  return {
    'bg-blue-700': isRoute.value,
    'text-white': isRoute.value,
    'md:text-blue-700': isRoute.value,
    'dark:hover:bg-gray-700': !isRoute.value,
    'hover:bg-gray-100': !isRoute.value,
  }
})
</script>

<template>
  <li>
    <RouterLink
      @click="props.toggle"
      :class="linkStyle"
      class="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700 md:dark:text-blue-500"
      :to="props.path"
      aria-current="page"
      >{{ props.linkText }}</RouterLink
    >
  </li>
</template>
