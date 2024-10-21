<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <input
    class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    type="button"
    :value="value"
  />
</template>
