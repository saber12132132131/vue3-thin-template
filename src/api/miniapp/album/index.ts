import { defHttp } from '/@/utils/http/axios'
import { Album } from './mdoel'
enum Api {
  Page = '/miniapp/album/page',
  Add = '/miniapp/album/add',
  Del = '/miniapp/album/del',
  Edit = '/miniapp/album/edit',
  One = '/miniapp/album/one',
  Detail = '/miniapp/album/detail',
  AddImages = '/miniapp/album/addImages',
  albumList = '/miniapp/album/list',
  albumRemoveImage = '/miniapp/album/removeImage',
  setMain = '/miniapp/album/setMain',
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
export const albumAddImage = (data) => defHttp.post<Boolean>({ url: Api.AddImages, data })
export const albumList = () => defHttp.get({ url: Api.albumList })
export const albumSetMain = (albumId, photoId) =>
  defHttp.get({ url: Api.setMain, params: { albumId, photoId } })
export const albumRemoveImage = (id?: number) =>
  defHttp.get({ url: Api.albumRemoveImage, params: { id } })
