<script setup>
const props = defineProps(['title', 'description'])
</script>

<template>
  <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
    <div
      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
    >
      <slot name="icon" />
    </div>
    <div>
      <a href="#" class="font-semibold text-gray-900">
        {{ props.title }}
        <span class="absolute inset-0"></span>
      </a>
      <p class="mt-1 text-gray-600">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
