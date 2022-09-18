export interface Topic {
  /**
   * 专题简介
   */
  desc: string
  /**
   * 专题Id
   */
  id?: number
  /**
   * 专题图册数
   */
  photoAlbumNum?: number
  /**
   * 分享次数
   */
  shareNum?: number
  /**
   * 订阅数
   */
  subscribeNum?: number
  /**
   * 专题副标题
   */
  subtitle: string
  /**
   * 专题名字
   */
  title: string
}
