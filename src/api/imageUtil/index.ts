import COS from 'cos-js-sdk-v5'

// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
const cos = new COS({
  SecretId: 'AKIDTlna6LJ1SbT4PTHtFK9gyzjCSTDhurXw',
  SecretKey: '93g27xXpqb5IEtIQItEI5bqpXy82f04t',
})

export const imagePut = function (dir, handleProgress, handleUploaded) {
  return function ({ file }) {
    cos
      .putObject({
        Bucket: 'free-1259347022' /* 填入您自己的存储桶，必须字段 */,
        Region: 'ap-nanjing' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
        Key: `${dir}/${file.name}` /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
        StorageClass: 'STANDARD',
        Body: file, // 上传文件对象
        onProgress(config) {
          handleProgress(file, config)
        },
      })
      .then((res) => {
        handleUploaded(file, res)
      })
  }
}
