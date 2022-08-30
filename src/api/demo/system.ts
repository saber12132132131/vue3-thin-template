import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  AccountListItem,
} from '../model/systemModel'
import { defHttp } from '/@/utils/http/axios'

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/dept/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/menu/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
  EditRole = '/system/editRole',
  AddRole = '/system/addRole',
  DelRole = '/system/delRole',
  EditAccount = '/system/editAccount',
  AddAccount = '/system/addAccount',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params })

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params })

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params })

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params })

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params })

export const setRoleStatus = (id: number, status: Boolean) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } })

export const editRole = (data) => defHttp.post({ url: Api.EditRole, data })

export const addRole = (data) => defHttp.post({ url: Api.AddRole, data })

export const delRole = (id: number) => defHttp.get({ url: Api.DelRole, params: { id } })

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' })

export const editAccount = (data: AccountListItem) =>
  defHttp.post<AccountListItem>({ url: Api.EditAccount, data })

export const addAccount = (data: AccountListItem) =>
  defHttp.post<AccountListItem>({ url: Api.AddAccount, data })
