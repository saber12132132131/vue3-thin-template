/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-02 16:25:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\types\module.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'ant-design-vue/es/locale/*' {
  import { Locale } from 'ant-design-vue/types/locale-provider'
  const locale: Locale & ReadonlyRecordable
  export default locale as Locale & ReadonlyRecordable
}

declare module 'moment/dist/locale/*' {
  import { LocaleSpecification } from 'moment'
  const locale: LocaleSpecification & ReadonlyRecordable
  export default locale
}

declare module 'virtual:*' {
  const result: any
  export default result
}
