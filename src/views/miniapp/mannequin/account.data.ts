import { BasicColumn } from '/@/components/Table'
import { FormSchema } from '/@/components/Table'
export const columns: BasicColumn[] = [
  {
    title: '模特名字',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '头像',
    dataIndex: 'headImg',
    width: 120,
  },
  {
    title: '模特简介',
    dataIndex: 'des',
    width: 120,
  },
  {
    title: '模特生日',
    dataIndex: 'birthday',
    width: 120,
  },
  {
    title: '粉丝数目',
    dataIndex: 'fanNum',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '修改时间',
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
    field: 'name',
    label: '模特名字',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入模特名字',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败')
      //         })
      //     })
      //   },
      // },
    ],
  },
  {
    field: 'headImg',
    label: '头像',
    component: 'Input',
    required: true,
  },
  {
    field: 'des',
    label: '模特简介',
    component: 'InputTextArea',
    required: true,
  },
  {
    label: '模特生日',
    field: 'birthday',
    component: 'DatePicker',
    required: true,
  },
]
