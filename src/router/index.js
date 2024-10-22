import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import IntegrationsView from '@/views/IntegrationsView.vue'
import DemoPortalView from '@/views/DemoPortalView/DemoPortalView.vue'
import BasePortalDashboardView from '@/views/BasePortalView/BasePortalDashboardView.vue'
import BasePortalReportingView from '@/views/BasePortalView/BasePortalReportingView.vue'
import BasePortalConfigurationView from '@/views/BasePortalView/BasePortalConfigurationView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (
      to.path == '/demo-portal/dashboard' && !from.path.includes('/demo-portal')
    ) {
      return { el: '#basePortalBar', top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo-portal',
      name: 'demo-portal',
      component: DemoPortalView,
      redirect: '/demo-portal/dashboard',
      children: [
        {
          path: 'dashboard',
          component: BasePortalDashboardView,
        },
        {
          path: 'reporting',
          component: BasePortalReportingView,
        },
        {
          path: 'configuration',
          component: BasePortalConfigurationView,
        },
      ],
    },
    {
      path: '/integrations',
      name: 'integrations',
      component: IntegrationsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
