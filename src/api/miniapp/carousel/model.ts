export interface Carousel {
  /**
   * 轮播图id
   */
  id?: number
  /**
   * 轮播图片URL
   */
  imgUrl: string
  /**
   * 小程序页面链接
   */
  page: string
  /**
   * 页面参数
   */
  pageId?: number
  /**
   * 排序
   */
  sort?: number
  /**
   * 状态 是否启用
   */
  status?: boolean
  /**
   * 类型
   */
  type: number
}
