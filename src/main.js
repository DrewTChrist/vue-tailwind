import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import DemoPortalApp from './DemoPortalApp/App.vue'
import LivePortalApp from './LivePortalApp/App.vue'
import router from './router'

const livePinia = createPinia()
const demoPinia = createPinia()

// eslint-disable-next-line no-unused-vars
const app = createApp(App).use(livePinia).use(router).mount('#app')

const createDemoPortalApp = () =>
  createApp(DemoPortalApp).use(demoPinia).use(router)

const createLivePortalApp = () =>
  createApp(LivePortalApp).use(livePinia).use(router)

export { createDemoPortalApp, createLivePortalApp }
