<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DarkModeToggler from './DarkModeToggler.vue'

const darkMode = defineModel('darkMode')

const showDropdown = ref(false)
const dropdown = ref(null)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function closeDropdown(e) {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.addEventListener('click', closeDropdown)
})
</script>

<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900">
    <div
      ref="dropdown"
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >Website</span
        >
      </a>
      <div class="flex flex-row items-center md:hidden">
        <button
          @click="toggleDropdown"
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
        <DarkModeToggler v-model:darkMode="darkMode" />
      </div>
      <div
        :class="{ hidden: !showDropdown }"
        class="w-full md:block md:hidden md:w-auto"
        id="navbar-default"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
        >
          <slot name="links" :toggleDropdown="toggleDropdown" />
        </ul>
      </div>
      <div class="md:show hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
        >
          <slot name="links" />
          <DarkModeToggler v-model:darkMode="darkMode" />
        </ul>
      </div>
    </div>
  </nav>
</template>
