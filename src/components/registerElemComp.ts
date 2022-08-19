/*
 * @Author: your name
 * @Date: 2021-11-22 16:13:42
 * @LastEditTime: 2021-11-22 16:16:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-thin-template\src\components\registerElemComp.ts
 */
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import VueForm from '@lljj/vue3-form-element'
import 'element-plus/dist/index.css'
export function registerElemComp(app: App) {
  app.component('VueForm', VueForm)
  app.use(ElementPlus)
}
