module.exports = {
  table: [
    {
      url: '/apiv2/getUsers',
      method: 'get',
      timeout: '200',
      tableName: 'user',
      parentName: 'permission',
      response: [
        {
          userName: '@cname()',
          createTime: '@datetime',
          remark: '@cword(10,20)',
          address: '@county(true)',
          headImg: '@image',
        },
      ],
    },
  ],
  form: [],
}
