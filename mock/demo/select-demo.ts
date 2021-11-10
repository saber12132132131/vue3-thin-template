/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-05 16:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\mock\demo\select-demo.ts
 */
import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const demoList = (keyword, count = 20) => {
  const result = {
    list: [] as any[],
  }
  for (let index = 0; index < count; index++) {
    result.list.push({
      name: `${keyword ?? ''}选项${index}`,
      id: `${index}`,
    })
  }
  return result
}

export default [
  {
    url: '/basic-api/select/getDemoOptions',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { keyword, count } = query
      console.log(keyword)
      return resultSuccess(demoList(keyword, count))
    },
  },
] as MockMethod[]
