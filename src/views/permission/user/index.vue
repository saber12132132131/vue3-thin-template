<template>
  <div class="p-4">
    <BasicTable
      @register="registerTable"
      title="基础示例"
      titleHelpMessage="温馨提醒"
      ref="tableRef"
      :api="api"
      :columns="columns"
      :pagination="pagination"
    >
      <!-- 表格顶部左侧区域 -->
      <template #tableTitle></template>
      <!-- 表格顶部右侧区域 -->
      <template #toolbar></template>
      <!-- 展开行区域区域 -->
      <!-- <template #expandedRowRender></template> -->
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
  import { BasicTable, TableAction, useTable } from '/@/components/Table'
  import { getBasicColumns, getActions, getDropDownActions } from './tableConfig'
  import { getList } from '/@/api/permission/user'
  export default defineComponent({
    name: 'user',
    components: {
      BasicTable,
      TableAction,
    },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction组件及固定列示例',
        bordered: true,
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      })
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
      return {
        tableRef,
        columns: getBasicColumns(),
        getActions,
        getDropDownActions,
        pagination,
        toggleLoading,
        api: getList,
        registerTable,
      }
    },
  })
</script>
