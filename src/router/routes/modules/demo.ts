import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.demo.table.table'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'DemoPage',
      component: () => import('/@/views/demo/table.vue'),
      meta: {
        title: t('routes.demo.table.table'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'test/index',
      name: 'test/indexPage',
      component: () => import('/@/views/demo/test/index.vue'),
      meta: {
        title: t('routes.displayName'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
}

export default dashboard
