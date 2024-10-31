<script setup>
import BaseView from '@/views/BaseView.vue'
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLiveStore } from '@/stores/liveStore'

const router = useRouter()
const liveStore = useLiveStore()

const email = ref('')
const password = ref('')

function handleSignin() {
  goToDashboard()
}

function goToDashboard() {
  router.push({
    name: 'live-dashboard',
    params: { id: liveStore.data.id },
  })
}

onMounted(() => {
  liveStore.data.id = 0
  liveStore.data.name = 'Customer 0'
})
</script>

<template>
  <BaseView>
    <div
      class="mb-32 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-16 w-auto rounded-full"
          src="https://placehold.co/400x400?text=logo"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
              >Email address</label
            >
            <div class="mt-2">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-blue-600 hover:text-blue-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <BaseButton
              @click="handleSignin"
              type="button"
              value="Sign in"
              class="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  </BaseView>
</template>
