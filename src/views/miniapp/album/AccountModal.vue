<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue'
  import { BasicModal, useModalInner } from '/@/components/Modal'
  import { BasicForm, useForm } from '/@/components/Form/index'
  import { getAccountFormSchema } from './account.data'
  import { getDeptList } from '/@/api/demo/system'

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    props: {
      dir: String,
    },
    emits: ['success', 'register'],
    setup(props, { emit }) {
      const isUpdate = ref(true)
      const rowId = ref('')
      console.log(props)
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: getAccountFormSchema(),
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      })

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields()
        setModalProps({ confirmLoading: false })
        isUpdate.value = !!data?.isUpdate

        if (unref(isUpdate)) {
          rowId.value = data.record.id
          data.record.needVip ??= false
          data.record.isSelect ??= false
          data.record.isHot ??= false
          setFieldsValue({
            ...data.record,
          })
        } else {
          setFieldsValue({
            needVip: false,
          })
        }

        const treeData = await getDeptList()
        updateSchema([
          {
            field: 'pwd',
            show: !unref(isUpdate),
          },
          {
            field: 'dept',
            componentProps: { treeData },
          },
        ])
      })

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'))

      async function handleSubmit() {
        try {
          const values = await validate()
          setModalProps({ confirmLoading: true })
          // TODO custom api
          console.log(values)
          closeModal()
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } })
        } finally {
          setModalProps({ confirmLoading: false })
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit }
    },
  })
</script>
