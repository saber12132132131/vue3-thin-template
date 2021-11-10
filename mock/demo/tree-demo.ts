/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-03 11:39:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\mock\demo\tree-demo.ts
 */
import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const demoTreeList = (keyword) => {
  const result = {
    list: [] as Recordable[],
  }
  for (let index = 0; index < 5; index++) {
    const children: Recordable[] = []
    for (let j = 0; j < 3; j++) {
      children.push({
        title: `${keyword ?? ''}选项${index}-${j}`,
        value: `${index}-${j}`,
        key: `${index}-${j}`,
      })
    }
    result.list.push({
      title: `${keyword ?? ''}选项${index}`,
      value: `${index}`,
      key: `${index}`,
      children,
    })
  }
  return result
}

export default [
  {
    url: '/basic-api/tree/getDemoOptions',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { keyword } = query
      console.log(keyword)
      return resultSuccess(demoTreeList(keyword))
    },
  },
] as MockMethod[]
