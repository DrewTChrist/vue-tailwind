import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useLiveStore = defineStore('liveStore', () => {
  const data = reactive({
    name: '',
    id: 0,
  })

  return { data }
})
