<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template> -->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此账号',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <!-- <AccountModal @register="registerModal" @success="handleSuccess" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'

  import { BasicTable, useTable, TableAction } from '/@/components/Table'
  import { getAppUserByPage } from '../../../api/miniapp/user/user'
  import { PageWrapper } from '/@/components/Page'

  import { useModal } from '/@/components/Modal'
  import AccountModal from './AccountModal.vue'

  import { columns, searchFormSchema } from './account.data'
  import { useGo } from '/@/hooks/web/usePage'
  import { isUndefined } from 'lodash'

  export default defineComponent({
    name: 'combo',
    components: { BasicTable, PageWrapper, AccountModal, TableAction },
    setup() {
      const go = useGo()
      const [registerModal, { openModal }] = useModal()
      const searchInfo = reactive<Recordable>({})
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '小程序用户',
        api: getAppUserByPage,
        fetchSetting: {
          sizeField: 'size',
          listField: 'records',
        },
        beforeFetch: (params) => {
          if (!isUndefined(params.pageSize)) {
            console.log(params)
            params.size = params.pageSize
            params.key = ''
            delete params.pageSize
          }

          return params
        },
        afterFetch: (...rest) => {
          console.log(rest)
        },
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info)
          return info
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      })

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        })
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        })
      }

      function handleDelete(record: Recordable) {
        console.log(record)
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中

          const result = updateTableDataRecord(values.id, values)
          console.log(result)
        } else {
          reload()
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId
        reload()
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id)
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      }
    },
  })
</script>
