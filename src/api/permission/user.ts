import { defHttp } from '/@/utils/http/axios'
import { userModel } from '/@/views/permission/user/model'
import { ErrorMessageMode } from '/#/axios'

export function getList() {
  return defHttp.get<userModel[]>({ url: '/apiv2/getUsers' })
}
