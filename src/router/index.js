import { createRouter, createWebHistory } from 'vue-router'
import BasePortalConfigurationView from '@/BasePortalApp/BasePortalConfigurationView.vue'
import BasePortalDashboardView from '@/BasePortalApp/BasePortalDashboardView.vue'
import BasePortalIntegrationsView from '@/BasePortalApp/BasePortalIntegrationsView.vue'
import BasePortalReportingView from '@/BasePortalApp/BasePortalReportingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (
      (to.name.includes('demo') && !from.name.includes('demo')) ||
      (to.name.includes('live') && !from.name.includes('live'))
    ) {
      return { el: '#basePortalBar', top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/integrations',
      name: 'integrations',
      component: () => import('@/views/IntegrationsView.vue'),
    },
    {
      path: '/demo',
      name: 'demo-portal',
      redirect: '/demo/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'demo-dashboard',
          components: {
            default: () => import('@/DemoPortalApp/DemoPortalView.vue'),
            portalContent: () =>
              import('@/DemoPortalApp/DemoPortalDashboardView.vue'),
          },
        },
        {
          path: 'integrations',
          name: 'demo-integrations',
          components: {
            default: () => import('@/DemoPortalApp/DemoPortalView.vue'),
            portalContent: () =>
              import('@/DemoPortalApp/DemoPortalIntegrationsView.vue'),
          },
        },
        {
          path: 'reporting',
          name: 'demo-reporting',
          components: {
            default: () => import('@/DemoPortalApp/DemoPortalView.vue'),
            portalContent: () =>
              import('@/DemoPortalApp/DemoPortalReportingView.vue'),
          },
        },
        {
          path: 'configuration',
          name: 'demo-configuration',
          components: {
            default: () => import('@/DemoPortalApp/DemoPortalView.vue'),
            portalContent: BasePortalConfigurationView,
          },
        },
      ],
    },
    {
      path: '/portal/login',
      name: 'live-login',
      component: () => import('@/LivePortalApp/LivePortalLoginView.vue'),
    },
    {
      path: '/portal/:id',
      name: 'portal',
      redirect: { name: 'live-dashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'live-dashboard',
          components: {
            default: () => import('@/LivePortalApp/LivePortalView.vue'),
            portalContent: BasePortalDashboardView,
          },
        },
        {
          path: 'integrations',
          name: 'live-integrations',
          components: {
            default: () => import('@/LivePortalApp/LivePortalView.vue'),
            portalContent: BasePortalIntegrationsView,
          },
        },
        {
          path: 'reporting',
          name: 'live-reporting',
          components: {
            default: () => import('@/LivePortalApp/LivePortalView.vue'),
            portalContent: BasePortalReportingView,
          },
        },
        {
          path: 'configuration',
          name: 'live-configuration',
          components: {
            default: () => import('@/LivePortalApp/LivePortalView.vue'),
            portalContent: BasePortalConfigurationView,
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
