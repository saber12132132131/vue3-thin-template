import { defHttp } from '/@/utils/http/axios'
import { Combo } from './mdoel.ts'
enum Api {
  Page = '/miniapp/combo/page',
  Add = '/miniapp/combo/add',
  Del = '/miniapp/combo/del',
  Edit = '/miniapp/combo/edit',
}

/**
 * @description: Get sample options value
 */
export const comboPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const comboAdd = (params?: Omit<Combo, 'id'>) => defHttp.post({ url: Api.Add, data: params })
export const comboDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const comboEdit = (params?: Combo) => defHttp.post({ url: Api.Edit, data: params })
