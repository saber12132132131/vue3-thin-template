<template>
  <div class="p-4">
    <Description @register="register" class="mt-4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { Alert } from 'ant-design-vue'
  import { Description, useDescription } from '/@/components/Description/index'
  import { albumDescSchema } from './account.data'
  import { albumOne } from '/@/api/miniapp/album'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: { Description, Alert },
    setup() {
      const id = Number(useRoute().params?.id)
      const album = albumOne(id)
      const [register] = useDescription({
        title: 'useDescription',
        data: album,
        schema: albumDescSchema,
      })
      return { register }
    },
  })
</script>
