import { defHttp } from '/@/utils/http/axios'
import { userModel } from '/@/views/permission/user/model'

export function getList() {
  return defHttp.get<userModel[]>({ url: '/apiv2/getUsers' })
}
