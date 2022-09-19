import { modelList } from '/@/api/miniapp/mannequin'
import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
export const columns: BasicColumn[] = [
  {
    title: '图册名字',
    dataIndex: 'photoName',
    width: 120,
  },
  {
    title: '图册图片数',
    dataIndex: 'photoNum',
    width: 120,
  },
  {
    title: '模特名字',
    dataIndex: 'modelName',
    width: 120,
  },
  {
    title: '图册下载地址',
    dataIndex: 'downloadUrl',
    width: 120,
  },
  {
    title: '是否需要Vip',
    dataIndex: 'needVip',
    width: 180,
    customRender({ record }) {
      if (record.needVip) {
        Status
        return '是'
      } else {
        return '否'
      }
    },
  },
  {
    title: '积分点数',
    dataIndex: 'point',
    width: 180,
  },
  {
    title: '浏览次数',
    dataIndex: 'phoneNumber',
    width: 120,
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
    field: 'photoName',
    label: '图册名字',
    component: 'Input',
    required: true,
  },
  {
    field: 'downloadUrl',
    label: '图册下载地址',
    component: 'Input',
    required: true,
  },

  {
    label: '是否需要Vip',
    field: 'needVip',
    component: 'Switch',
    required: true,
  },
  {
    label: '模特',
    field: 'modelId',
    component: 'ApiSelect',
    componentProps: {
      api: modelList,
      labelField: 'name',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '积分点数',
    field: 'point',
    component: 'InputNumber',
  },
]
