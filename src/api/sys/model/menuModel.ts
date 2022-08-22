import type { RouteMeta } from 'vue-router'
export interface RouteItem {
  path: string
  component: any
  meta: RouteMeta
  name?: string
  alias?: string | string[]
  redirect?: string
  caseSensitive?: boolean
  children?: RouteItem[]
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[]

export enum MenuEnum {
  Directoy = 0,
  Menu,
  Button,
}

export interface Menu {
  id?: Number
  pid?: Number
  type: MenuEnum
  title?: String
  name?: String
  component?: String
  sort?: Number
  icon?: String
  path?: String
  cache?: Boolean //是否缓存
  permission?: String //权限标志
  hideMenu?: Boolean //是否显示
  status?: Boolean //状态
  isExt?: Boolean //是否是外链
}
