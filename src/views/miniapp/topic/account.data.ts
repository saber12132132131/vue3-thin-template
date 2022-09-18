import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
export const columns: BasicColumn[] = [
  {
    title: '专题名字',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '专题简介',
    dataIndex: 'des',
    width: 120,
  },
  {
    title: '专题副标题',
    dataIndex: 'subtitle',
    width: 120,
  },
  {
    title: '专题图册数',
    dataIndex: 'photoAlbumNum',
    width: 120,
  },
  {
    title: '分享次数',
    dataIndex: 'shareNum',
    width: 120,
  },
  {
    title: '订阅数',
    dataIndex: 'subscribeNum',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 180,
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
]

export const accountFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '专题名字',
    component: 'Input',
  },
  {
    field: 'des',
    label: '专题简介',
    component: 'Input',
    required: true,
  },

  {
    label: '专题副标题',
    field: 'subtitle',
    component: 'Input',
    required: true,
  },
]
