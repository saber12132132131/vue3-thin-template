import { defHttp } from '/@/utils/http/axios'
import { Album } from './mdoel'
enum Api {
  Page = '/miniapp/album/page',
  Add = '/miniapp/album/add',
  Del = '/miniapp/album/del',
  Edit = '/miniapp/album/edit',
  One = '/miniapp/album/one',
  Detail = '/miniapp/album/detail',
}

/**
 * @description: Get sample options value
 */
export const albumPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const albumAdd = (params?: Omit<Album, 'id'>) => defHttp.post({ url: Api.Add, data: params })
export const albumDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const albumEdit = (params?: Album) => defHttp.post({ url: Api.Edit, data: params })
export const albumOne = (id?: number) => defHttp.get<Album>({ url: Api.One, params: { id } })
export const albumDetail = (id?: number) => defHttp.get<Album>({ url: Api.Detail, params: { id } })
