<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增菜单 </a-button>
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
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue'

  import { BasicTable, useTable, TableAction } from '/@/components/Table'
  import { getMenuList } from '/@/api/demo/system'

  import { useDrawer } from '/@/components/Drawer'
  import MenuDrawer from './MenuDrawer.vue'

  import { columns, searchFormSchema } from './menu.data'
  import { addMenu, delMenu, editMenu } from '/@/api/sys/menu'
  import { Menu } from '/@/api/sys/model/menuModel'

  export default defineComponent({
    name: 'MenuManagement',
    components: { BasicTable, MenuDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer()
      const [registerTable, { reload, expandAll }] = useTable({
        title: '菜单列表',
        api: getMenuList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        isTreeTable: true,
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      })

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        })
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        })
      }

      async function handleDelete(record: Recordable) {
        await delMenu(record.id)
        reload()
      }

      async function handleSuccess({ isUpdate, values }) {
        console.log(isUpdate, values)
        const menu: Menu = {
          id: values.id,
          type: values.type,
          title: values.title,
          pid: values.parentMenu,
          name: values.menuName,
          component: values.component,
          sort: values.orderNo,
          icon: values.icon,
          path: values.path,
          cache: values.keepalive,
          permission: values.permission,
          hideMenu: values.hideMenu,
          status: values.status,
          isExt: values.isExt,
        }
        console.log(menu)
        if (isUpdate) {
          await editMenu(menu)
        } else {
          await addMenu(menu)
        }

        reload()
      }

      function onFetchSuccess() {
        // 演示默认展开所有表项
        nextTick(expandAll)
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
      }
    },
  })
</script>
