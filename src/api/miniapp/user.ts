import { defHttp } from '/@/utils/http/axios'
import { AppUser } from './userModel'
enum Api {
  userPage = '/miniapp/user/page',
  userSetStatus = '/miniapp/user/setStatus',
  userDel = '/miniapp/user/del',
}

/**
 * @description: Get sample options value
 */
export const getAppUserByPage = (params?: AppUser) =>
  defHttp.get<AppUser[]>({ url: Api.userPage, params })
