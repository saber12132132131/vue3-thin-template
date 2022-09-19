export interface Album {
  /**
   * 图册下载地址
   */
  downloadUrl: string
  /**
   * 图册主键
   */
  id: number
  /**
   * 主图
   */
  mainImage: string
  /**
   * 相册模特Id
   */
  modelId: number
  /**
   * 是否需要Vip
   */
  needVip: boolean
  /**
   * 图册名字
   */
  photoName: string
  /**
   * 图册图片数
   */
  photoNum: number
  /**
   * 积分点数
   */
  point: number
  /**
   * 浏览次数
   */
  visitNum: number
}
