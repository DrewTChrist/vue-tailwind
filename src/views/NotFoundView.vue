<script setup>
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
import BaseView from './BaseView.vue'
</script>

<template>
  <BaseView>
    <div class="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-4xl font-semibold text-blue-600">404</p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100"
        >
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <BaseButton value="Go back home" />
        </div>
      </div>
    </div>
  </BaseView>
</template>
