import { modelList } from '/@/api/miniapp/mannequin'
import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
import { DescItem } from '/@/components/Description/index'
import { Tag } from 'ant-design-vue'
import { h } from 'vue'
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
        // Status
        return h(
          Tag,
          {
            color: 'success',
          },
          '是',
        )
      } else {
        return h(
          Tag,
          {
            color: 'error',
          },
          '否',
        )
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
export function getAccountFormSchema(): FormSchema[] {
  return [
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
}
export const albumDescSchema: DescItem[] = [
  {
    field: 'photoName',
    label: '图册名字',
    labelMinWidth: 150,
    contentMinWidth: 450,
  },
  {
    field: 'downloadUrl',
    label: '图册下载地址',
    labelMinWidth: 300,
    contentMinWidth: 300,
  },
  {
    label: '是否需要Vip',
    field: 'needVip',
    labelMinWidth: 150,
    contentMinWidth: 450,
    render(val, data) {
      console.log(val, data)
      if (val) {
        // Status
        return h(
          Tag,
          {
            color: 'success',
          },
          '是',
        )
      } else {
        return h(
          Tag,
          {
            color: 'error',
          },
          '否',
        )
      }
    },
  },
  {
    label: '积分点数',
    field: 'point',
    labelMinWidth: 150,
    contentMinWidth: 450,
  },
  {
    label: '是否是热门',
    field: 'isHot',
    labelMinWidth: 150,
    contentMinWidth: 450,
    render(val) {
      if (val) {
        // Status
        return h(
          Tag,
          {
            color: 'success',
          },
          '是',
        )
      } else {
        return h(
          Tag,
          {
            color: 'error',
          },
          '否',
        )
      }
    },
  },
  {
    label: '是否是精选',
    field: 'isSelect',
    labelMinWidth: 150,
    contentMinWidth: 450,
    render(val) {
      if (val) {
        // Status
        return h(
          Tag,
          {
            color: 'success',
          },
          '是',
        )
      } else {
        return h(
          Tag,
          {
            color: 'error',
          },
          '否',
        )
      }
    },
  },
  {
    label: '模特姓名',
    field: 'model.name',
    labelMinWidth: 150,
    contentMinWidth: 450,
  },
]
