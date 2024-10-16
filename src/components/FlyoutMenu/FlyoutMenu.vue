<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showMenu = ref(false)
const menu = ref(null)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function closeMenu(e) {
  if (menu.value && !menu.value.contains(e.target)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<template>
  <li>
    <div class="relative" ref="menu">
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex w-full items-center gap-x-1 rounded px-3 py-2 font-semibold leading-6 text-gray-900 hover:bg-gray-200 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:md:text-blue-500 dark:md:hover:bg-transparent"
        aria-expanded="false"
      >
        <span>Solutions</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <Transition>
        <div
          v-if="showMenu"
          :class="{ hidden: !showMenu }"
          class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
        >
          <div
            class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-900/5"
          >
            <div class="p-4">
              <slot />
            </div>
            <div
              class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-gray-950/5"
            >
              <a
                href="#"
                class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <svg
                  class="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Watch demo
              </a>
              <a
                href="#"
                class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <svg
                  class="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </li>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.125s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
