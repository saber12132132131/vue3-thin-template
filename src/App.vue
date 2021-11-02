<!--
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-02 15:49:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\src\App.vue
-->
<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue'
  import { AppProvider } from '/@/components/Application'

  import { useTitle } from '/@/hooks/web/useTitle'
  import { useLocale } from '/@/locales/useLocale'

  // support Multi-language
  const { getAntdLocale } = useLocale()
  console.log(AppProvider)
  // Listening to page changes and dynamically changing site titles
  useTitle()
</script>
