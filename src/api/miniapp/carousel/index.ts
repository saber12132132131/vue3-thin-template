import { defHttp } from '/@/utils/http/axios'
import { Carousel } from './mdoel.ts'
enum Api {
  Page = '/miniapp/carousel/page',
  Add = '/miniapp/carousel/add',
  Del = '/miniapp/carousel/del',
  Edit = '/miniapp/carousel/edit',
}

/**
 * @description: Get sample options value
 */
export const carouselPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const carouselAdd = (params?: Omit<Carousel, 'id'>) =>
  defHttp.post({ url: Api.Add, data: params })
export const carouselDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const carouselEdit = (params?: Combo) => defHttp.post({ url: Api.Edit, data: params })
