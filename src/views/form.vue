<template>
  <VueForm v-model="formData" :ui-schema="uiSchema" :schema="schema" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { BasicTable } from '/@/components/Table'
  // import VueForm from '@lljj/vue3-form-ant'
  export default defineComponent({
    name: 'form',
    components: {
      BasicTable,
    },
    setup() {
      return {
        formData: {},
        schema: {
          type: 'object',
          required: [],
          properties: {
            activity: {
              title: '活动',
              type: 'object',
              required: ['activityName'],
              properties: {
                activityName: {
                  title: '活动名',
                  type: 'string',
                  'ui:options': {
                    placeholder: '请输入活动名',
                  },
                },
                activityDate: {
                  title: '活动时间',
                  type: 'array',
                  format: 'date',
                  items: {
                    type: 'string',
                  },
                  'ui:options': {
                    startPlaceholder: '开始日期',
                    endPlaceholder: '结束日期',
                  },
                },
              },
              'ui:order': ['activityName', 'activityDate'],
            },
          },
          'ui:order': ['activity'],
        },
        uiSchema: {},
        formFooter: {
          show: false,
        },
        formProps: {
          layoutColumn: 2,
          labelWidth: '100px',
          labelSuffix: '：',
        },
      }
    },
  })
</script>
