import { defHttp } from '/@/utils/http/axios'
import { Mannequin } from './mdoel'
enum Api {
  Page = '/miniapp/model/page',
  Add = '/miniapp/model/add',
  Del = '/miniapp/model/del',
  Edit = '/miniapp/model/edit',
}

/**
 * @description: Get sample options value
 */
export const modelPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const modelAdd = (params?: Omit<Mannequin, 'id'>) =>
  defHttp.post({ url: Api.Add, data: params })
export const modelDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const modelEdit = (params?: Mannequin) => defHttp.post({ url: Api.Edit, data: params })
