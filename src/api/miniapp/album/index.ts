import { defHttp } from '/@/utils/http/axios'
import { Album } from './mdoel'
enum Api {
  Page = '/miniapp/album/page',
  Add = '/miniapp/album/add',
  Del = '/miniapp/album/del',
  Edit = '/miniapp/album/edit',
}

/**
 * @description: Get sample options value
 */
export const albumPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const albumAdd = (params?: Omit<Album, 'id'>) => defHttp.post({ url: Api.Add, data: params })
export const albumDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const albumEdit = (params?: Album) => defHttp.post({ url: Api.Edit, data: params })
