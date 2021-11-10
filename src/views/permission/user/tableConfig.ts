import { BasicColumn } from '/@/components/Table/src/types/table'
import { ActionItem } from '/@/components/Table'
export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'userName',
      dataIndex: 'userName',
      width: 150,
    },
    {
      title: 'createTime',
      dataIndex: 'createTime',
      width: 150,
    },
    {
      title: 'remark',
      dataIndex: 'remark',
      width: 150,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: 150,
    },
    {
      title: 'headImg',
      dataIndex: 'headImg',
      width: 150,
    },
  ]
}
export function getActions(_table, _record): ActionItem[] {
  console.log(_table, _record)
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
      onClick: function (_table, _record) {}.bind(null, _table, _record),
    },
  ]
}
export function getDropDownActions(_table, _record): ActionItem[] {
  return [
    {
      // 按钮文本
      label: '下载',
      // 是否禁用
      disabled: false,
      // 按钮颜色  'success' | 'error' | 'warning'
      color: 'error',
      // 根据权限编码来控制当前列是否显示，v2.4.0+
      // auth:""
      ifShow: true,
      // 点击回调
      onClick: function (_table, _record) {
        return false
      },
    },
  ]
}
