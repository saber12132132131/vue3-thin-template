import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
import { h } from 'vue'
import { Tag } from 'ant-design-vue'
export const columns: BasicColumn[] = [
  {
    title: '轮播图片URL',
    dataIndex: 'imgUrl',
    width: 120,
  },
  {
    title: '小程序页面链接',
    dataIndex: 'page',
    width: 120,
  },
  {
    title: '页面参数',
    dataIndex: 'pageId',
    width: 120,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 120,
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    width: 200,
    customRender({ record }) {
      if (record.status) {
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
    label: '轮播图片URL',
    field: 'imgUrl',
    component: 'Upload',
    required: true,
  },
  {
    field: 'page',
    label: '小程序页面链接',
    component: 'Input',
    required: true,
  },

  {
    label: '页面参数',
    field: 'pageId',
    component: 'Input',
    required: true,
  },
  {
    label: '排序',
    field: 'sort',
    component: 'Input',
    required: true,
  },
  {
    label: '是否启用',
    field: 'status',
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '停用', value: false },
      ],
    },
  },
]
