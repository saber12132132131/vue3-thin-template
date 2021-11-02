/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-02 16:25:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\types\index.d.ts
 */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

declare type RefType<T> = T | null

declare type LabelValueOptions = {
  label: string
  value: any
  [key: string]: string | number | boolean
}[]

declare type EmitType = (event: string, ...args: any[]) => void

declare type TargetContext = '_self' | '_blank'

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
