<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      titleHelpMessage="温馨提醒"
      ref="tableRef"
      :api="api"
      :columns="columns"
      :pagination="pagination"
      @columns-change="handleColumnChange"
    >
      <!-- 表格顶部左侧区域 -->
      <template #tableTitle></template>
      <!-- 表格顶部右侧区域 -->
      <template #toolbar></template>
      <!-- 展开行区域区域 -->
      <template #expandedRowRender></template>
      <!-- 表格顶部区域（标题上方） -->
      <template #headerTop></template>
      <template #action="{ record }">
        <TableAction
          :actions="getActions(tableRef, record)"
          :dropDownActions="getDropDownActions(tableRef, record)"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { BasicTable, TableAction } from '/@/components/Table'
  import { getBasicColumns, getActions, getDropDownActions } from './tableConfig'
  export default defineComponent({
    name: 'test',
    components: {
      BasicTable,
      TableAction,
    },
    setup() {
      const tableRef = ref(null)
      const pagination = ref<any>(false)
      const loading = ref(false)
      function toggleLoading() {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          pagination.value = { pageSize: 20 }
        }, 3000)
      }
      function api() {}
      return {
        tableRef,
        columns: getBasicColumns(),
        getActions,
        getDropDownActions,
        pagination,
        toggleLoading,
        api,
      }
    },
  })
</script>
