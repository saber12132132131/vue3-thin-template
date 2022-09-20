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
              icon: 'ant-design:instagram-outlined',
              color: 'success',
              tooltip: '查看详情',
              onClick: handleView.bind(null, record),
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
    <AccountModal :dir="dir" @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, nextTick } from 'vue'

  import { BasicTable, useTable, TableAction } from '/@/components/Table'
  import { PageWrapper } from '/@/components/Page'

  import { useModal } from '/@/components/Modal'
  import AccountModal from './AccountModal.vue'

  import { columns, searchFormSchema } from './account.data'
  import { isUndefined } from 'lodash'
  import { albumAdd, albumDel, albumEdit, albumPage } from '/@/api/miniapp/album'
  import { useMessage } from '/@/hooks/web/useMessage'
  import { useGo } from '/@/hooks/web/usePage'
  const msg = useMessage()
  export default defineComponent({
    name: 'album',
    components: { BasicTable, PageWrapper, AccountModal, TableAction },
    setup() {
      const go = useGo()
      const [registerModal, { openModal }] = useModal()
      const searchInfo = reactive<Recordable>({})
      const dir = ref('/album')
      const [registerTable, { reload }] = useTable({
        title: '模特',
        api: albumPage,
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
        nextTick(() => {
          dir.value = record.modelName
          openModal(true, {
            record,
            isUpdate: true,
          })
        })
      }

      function handleDelete(record: Recordable) {
        albumDel(record.id)
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

          albumEdit(value).then(() => {
            reload()
            msg.createMessage.success('修改成功')
          })
        } else {
          albumAdd(value).then(() => {
            reload()
            msg.createMessage.success('添加成功 ')
          })
        }
      }
      function handleView(record: Recordable) {
        go('/miniapp/detail/' + record.id)
      }
      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
        handleView,
        dir,
      }
    },
  })
</script>
