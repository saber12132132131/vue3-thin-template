import { BasicColumn } from '/@/components/Table/src/types/table'
import { ActionItem, TableActionType } from '/@/components/Table'
export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
  ]
}
export function getActions(table, record): ActionItem[] {
  return [
    {
      // 按钮文本
      label: '文本',
      // 是否禁用
      disabled: false,
      // 按钮颜色  'success' | 'error' | 'warning'
      color: 'success',
      // 根据权限编码来控制当前列是否显示，v2.4.0+
      // auth:""
      ifShow: true,
      // 点击回调
      onClick: function (table, record) {
        return false
      },
    },
  ]
}
export function getDropDownActions(table, record): ActionItem[] {
  return [
    {
      // 按钮文本
      label: '文本',
      // 是否禁用
      disabled: false,
      // 按钮颜色  'success' | 'error' | 'warning'
      color: 'success',
      // 根据权限编码来控制当前列是否显示，v2.4.0+
      // auth:""
      ifShow: true,
      // 点击回调
      onClick: function (table, record) {
        return false
      },
    },
  ]
}
