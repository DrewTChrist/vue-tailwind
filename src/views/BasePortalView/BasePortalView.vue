<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showMenu = ref(true)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-300 bg-white transition duration-300 dark:bg-gray-900"
  >
    <div id="basePortalBar" class="w-full bg-gray-600 p-4">
      <button
        @click="toggleMenu"
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
    </div>
    <div class="flex min-h-screen flex-col md:flex-row">
      <Transition>
        <div
          v-if="showMenu"
          :class="{ 'sm:hidden': !showMenu }"
          class="mt-2 min-h-full flex-none basis-1/5 md:static md:block"
        >
          <ul
            class="mx-2 h-full rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg font-semibold sm:mx-0 sm:rounded-none sm:rounded-r-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          >
            <li class="mb-2 mt-2">
              <RouterLink
                to="/demo-portal/dashboard"
                :class="{
                  'bg-blue-700': route.path == '/demo-portal/dashboard',
                  'dark:hover:bg-gray-700':
                    route.path != '/demo-portal/dashboard',
                }"
                class="block flex flex-row items-center space-x-2 rounded px-3 py-2 text-gray-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>Dashboard</p></RouterLink
              >
            </li>
            <li class="mb-2">
              <RouterLink
                to="/demo-portal/reporting"
                :class="{
                  'bg-blue-700': route.path == '/demo-portal/reporting',
                  'dark:hover:bg-gray-700':
                    route.path != '/demo-portal/reporting',
                }"
                class="block flex flex-row items-center space-x-2 rounded px-3 py-2 text-gray-900 dark:text-white"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
                  />
                </svg>
                <p>Reporting</p></RouterLink
              >
            </li>
            <li class="mb-2">
              <RouterLink
                to="/demo-portal/configuration"
                :class="{
                  'bg-blue-700': route.path == '/demo-portal/configuration',
                  'dark:hover:bg-gray-700':
                    route.path != '/demo-portal/configuration',
                }"
                class="block flex flex-row items-center space-x-2 rounded px-3 py-2 text-gray-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>Configuration</p></RouterLink
              >
            </li>
          </ul>
        </div>
      </Transition>
      <div
        class="mx-2 mt-2 grow rounded-lg border border-gray-100 bg-gray-50 text-lg font-semibold dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
