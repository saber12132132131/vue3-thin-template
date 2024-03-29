<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增话题</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
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
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'

  import { BasicTable, useTable, TableAction } from '/@/components/Table'
  import { PageWrapper } from '/@/components/Page'

  import { useModal } from '/@/components/Modal'
  import AccountModal from './AccountModal.vue'

  import { columns, searchFormSchema } from './account.data'
  import { isUndefined } from 'lodash'
  import { carouselAdd, carouselDel, carouselEdit, carouselPage } from '/@/api/miniapp/carousel'
  import { useMessage } from '/@/hooks/web/useMessage'
  const msg = useMessage()
  export default defineComponent({
    name: 'carousel',
    components: { BasicTable, PageWrapper, AccountModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal()
      const searchInfo = reactive<Recordable>({})
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '模特',
        api: carouselPage,
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
        carouselDel(record.id)
          .then(() => {
            msg.createMessage.success('删除成功')
          })
          .catch(() => {
            msg.createMessage.success('删除失败')
          })
          .finally(() => {
            reload()
          })
      }

      function handleSuccess({ isUpdate, values }) {
        const value = {
          ...values,
        }
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中

          carouselEdit(value).then(() => {
            updateTableDataRecord(value.id, value)
            msg.createMessage.success('修改成功')
          })
        } else {
          carouselAdd(value).then(() => {
            reload()
            msg.createMessage.success('添加成功 ')
          })
        }
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
      }
    },
  })
</script>
