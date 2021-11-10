import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/permission',
  name: 'permission',
  component: LAYOUT,
  redirect: '/permission/user/index',
  meta: {
    hideChildrenInMenu: false,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.displayName'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'user/index',
      name: 'user/indexPage',
      component: () => import('/@/views/permission/user/index.vue'),
      meta: {
        title: t('routes.displayName'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
}

export default dashboard
