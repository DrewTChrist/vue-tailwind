<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps([
  'collapsedLink',
  'toggle',
  'linkText',
  'routeName',
  'path',
])
const route = useRoute()

const isRoute = computed(() => route.name == props.routeName)

const linkStyle = computed(() => {
  return {
    'bg-blue-700': isRoute.value,
    'text-white': isRoute.value,
    'md:text-blue-700': isRoute.value,
    'dark:hover:bg-gray-700': !isRoute.value,
    'dark:md:hover:bg-transparent': !isRoute.value,
    'hover:bg-gray-200': !isRoute.value,
  }
})
</script>

<template>
  <li>
    <RouterLink
      @click="props.toggle"
      :class="linkStyle"
      class="block rounded px-3 py-2 text-gray-900 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:text-blue-500"
      :to="props.path"
      aria-current="page"
      >{{ props.linkText }}</RouterLink
    >
  </li>
</template>
