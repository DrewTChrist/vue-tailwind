<script setup>
defineModel('toggle')
defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div
    id="basePortalBar"
    class="flex w-full items-center space-x-4 bg-gray-300 p-4 text-2xl font-semibold text-gray-900 transition duration-300 dark:bg-gray-600 dark:text-white"
  >
    <button
      @click="toggle"
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex h-9 w-9 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <p>{{ title }}</p>
  </div>
</template>
