import { defHttp } from '/@/utils/http/axios'
import { Topic } from './mdoel'
enum Api {
  Page = '/miniapp/topic/page',
  Add = '/miniapp/topic/add',
  Del = '/miniapp/topic/del',
  Edit = '/miniapp/topic/edit',
}

/**
 * @description: Get sample options value
 */
export const topicPage = (params?: any) => defHttp.post({ url: Api.Page, data: params })
export const topicAdd = (params?: Omit<Topic, 'id'>) => defHttp.post({ url: Api.Add, data: params })
export const topicDel = (id?: number) => defHttp.post({ url: Api.Del, data: { id } })
export const topicEdit = (params?: Topic) => defHttp.post({ url: Api.Edit, data: params })
