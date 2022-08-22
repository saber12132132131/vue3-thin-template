import { defHttp } from '/@/utils/http/axios'
import { getMenuListResultModel, Menu } from './model/menuModel'

enum Api {
  GetMenuList = '/getMenuList',
  AddMenu = '/menu/add',
  EditMenu = '/menu/edit',
  DelMenu = '/menu/del',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetMenuList })
}
export const addMenu = (menu: Menu) => {
  return defHttp.post<Boolean>({ url: Api.AddMenu, data: menu })
}
export const editMenu = (menu: Menu) => {
  return defHttp.post<Boolean>({ url: Api.EditMenu, data: menu })
}
export const delMenu = (id: Number) => {
  return defHttp.get<Boolean>({
    url: Api.DelMenu,
    params: {
      id,
    },
  })
}
