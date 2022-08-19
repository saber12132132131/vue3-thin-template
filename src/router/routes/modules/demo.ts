/*
 * @Author: your name
 * @Date: 2021-11-10 14:34:16
 * @LastEditTime: 2021-11-22 14:58:25
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-thin-template\src\router\routes\modules\demo.ts
 */
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
    {
      path: 'from',
      name: 'formPage',
      component: () => import('/@/views/form.vue'),
      meta: {
        title: t('routes.form'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
}

export default dashboard
