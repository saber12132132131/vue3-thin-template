/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-02 16:25:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\types\utils.d.ts
 */
import type { ComputedRef, Ref } from 'vue'

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>
}
