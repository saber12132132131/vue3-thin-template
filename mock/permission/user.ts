// import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/basic-api/apiv2/getUsers',
    method: 'get',
    timeout: 200,
    response: function () {
      return {
        code: 0,
        'result|100': [
          {
            userName: '@cname()',
            createTime: '@datetime',
            remark: '@cword(10,20)',
            address: '@county(true)',
            headImg: '@image',
          },
        ],
        message: 'ok',
        type: 'success',
      }
    },
  },
] as MockMethod[]
