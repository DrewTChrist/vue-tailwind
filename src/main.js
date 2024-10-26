import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import DemoPortalApp from './DemoPortalApp/App.vue'
import LivePortalApp from './LivePortalApp/App.vue'
import router from './router'

// eslint-disable-next-line no-unused-vars
const app = createApp(App).use(createPinia()).use(router).mount('#app')

const createDemoPortalApp = () =>
  createApp(DemoPortalApp).use(createPinia()).use(router)
const createLivePortalApp = () =>
  createApp(LivePortalApp).use(createPinia()).use(router)

export { createDemoPortalApp, createLivePortalApp }
