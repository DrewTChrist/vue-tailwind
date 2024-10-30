import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const livePinia = createPinia()

// eslint-disable-next-line no-unused-vars
const app = createApp(App).use(livePinia).use(router).mount('#app')

export { livePinia }
