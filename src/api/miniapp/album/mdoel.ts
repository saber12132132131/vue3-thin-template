import { Mannequin } from '../mannequin/mdoel'

export interface Album {
  /**
   * 图册下载地址
   */
  downloadUrl?: string
  /**
   * 图册主键
   */
  id?: number
  /**
   * 主图
   */
  mainImage?: string
  /**
   * 相册模特Id
   */
  modelId?: number
  /**
   * 是否需要Vip
   */
  needVip?: boolean
  /**
   * 图册名字
   */
  photoName?: string
  /**
   * 图册图片数
   */
  photoNum?: number
  /**
   * 积分点数
   */
  point?: number
  /**
   * 浏览次数
   */
  visitNum?: number
}
export interface AlbumVo {
  id?: number
  photoName?: string
  photoNum?: number
  visitNum?: number
  downloadUrl?: string
  modelName?: string
  isHot?: boolean
  isSelect?: boolean
  needVip?: boolean
  point?: number
  model?: Mannequin
  photos?: Photo[]
}
export interface Photo {
  id?: number
  photo_album_id?: number
  photo_url?: string
  photo_HD_url?: string
  isMain?: boolean
}

export interface AddImagesVo {
  albumId?: number
  images: Photo[]
}
