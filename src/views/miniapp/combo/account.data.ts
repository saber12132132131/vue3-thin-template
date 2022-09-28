import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
import { h } from 'vue'
import { Tag } from 'ant-design-vue'
export const columns: BasicColumn[] = [
  {
    title: '套餐原价',
    dataIndex: 'maintainPrice',
    width: 120,
  },
  {
    title: '套餐名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '套餐价格',
    dataIndex: 'price',
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
    label: '套餐原价',
    field: 'maintainPrice',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '套餐名',
    component: 'Input',
    required: true,
  },

  {
    label: '套餐价格',
    field: 'price',
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
