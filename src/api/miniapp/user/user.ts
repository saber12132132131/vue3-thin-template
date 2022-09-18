import { defHttp } from '/@/utils/http/axios'
import { AppUser, setUserStatusBo } from './userModel'
enum Api {
  userPage = '/miniapp/user/page',
  userSetStatus = '/miniapp/user/setStatus',
  userDel = '/miniapp/user/del',
}

/**
 * @description: Get sample options value
 */
export const getAppUserByPage = (params?: any) =>
  defHttp.post<AppUser[]>({ url: Api.userPage, data: params })
export const setUserStatus = (statusBo: setUserStatusBo) =>
  defHttp.post<AppUser[]>({ url: Api.userSetStatus, data: statusBo })
export const userDel = (id: Number) => defHttp.post<AppUser[]>({ url: Api.userDel, data: { id } })
