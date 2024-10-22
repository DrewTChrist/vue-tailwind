<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  routerLinkPath: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="group relative flex gap-x-6 rounded-lg p-4 transition duration-150 hover:bg-gray-50 dark:hover:bg-gray-700"
  >
    <div
      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg transition duration-150 group-hover:bg-white dark:bg-gray-500 dark:group-hover:bg-gray-400"
    >
      <slot name="icon" />
    </div>
    <RouterLink :to="routerLinkPath">
      <a href="#" class="font-semibold text-gray-900 dark:text-white">
        {{ title }}
        <span class="absolute inset-0"></span>
      </a>
      <p class="mt-1 text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </RouterLink>
  </div>
</template>
