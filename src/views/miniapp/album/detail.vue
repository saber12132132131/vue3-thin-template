<template>
  <div class="p-4">
    <Description @register="register" class="mt-3" />
    <CollapseContainer title="图片">
      <Upload
        v-model:file-list="fileList"
        :show-upload-list="true"
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        @preview="handlePreview"
        multiple
        :maxCount="200"
        :before-upload="beforeUpload"
        :customRequest="imageUploadFun"
        @change="handleChange"
      >
        <loading-outlined v-if="loading" />
        <plus-outlined v-else />
        <div class="ant-upload-text">Upload</div>
      </Upload>
      <a-button type="primary" @click="saveImg">保存图片</a-button>
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { Alert, Upload } from 'ant-design-vue'
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
  import { Description, useDescription } from '/@/components/Description/index'
  import { CollapseContainer } from '/@/components/Container/index'
  import { albumDescSchema } from './account.data'
  import { albumAddImage, albumDetail } from '/@/api/miniapp/album'
  import { useRoute } from 'vue-router'
  import type { AlbumVo } from '/@/api/miniapp/album/mdoel'
  import { imagePut } from '/@/api/imageUtil'

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  export default defineComponent({
    components: { Description, Alert, CollapseContainer, Upload, PlusOutlined, LoadingOutlined },
    setup() {
      let ablum = ref<AlbumVo>({})
      const previewVisible = ref(false)
      const previewImage = ref('')
      const previewTitle = ref('')
      const imageUploadFun = ref()
      const loading = ref<boolean>(false)
      const fileList = ref<any[]>([])
      const uploadList = ref<any[]>([])
      const id = ref(Number(useRoute().params.id))
      useRoute().meta.title = '1212'
      onMounted(async () => {
        ablum.value = await albumDetail(id.value)
        const photoList = ablum.value.photos?.map((photo) => {
          const obj = {
            uid: photo.id,
            name: photo.id,
            status: 'done',
            url: photo.photo_url,
          }
          return obj
        })
        fileList.value = photoList ?? []
        imageUploadFun.value = imagePut(ablum.value.model?.name, (img) => {
          uploadList.value = [...uploadList.value, img]
        })
      })
      const [register] = useDescription({
        title: '图册基础内容',
        data: ablum,
        schema: albumDescSchema,
        column: 2,
        size: 'middle',
        useCollapse: true,
        collapseOptions: {
          canExpand: true,
        },
      })
      // 上传前校验
      function beforeUpload(_file: File) {
        return true
      }
      const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
          file.preview = (await getBase64(file.originFileObj)) as string
        }
        previewImage.value = file.url || file.preview
        previewVisible.value = true
        previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
      }
      function handleChange({ event }) {
        if (event?.percent == 100) {
          fileList.value = fileList.value.map((item) => {
            item.status = 'done'
            return item
          })
        }
      }
      function saveImg() {
        const params = {
          albumId: id.value,
          images: uploadList.value,
        }
        albumAddImage(params)
        console.log(uploadList)
      }
      return {
        register,
        loading,
        fileList,
        handlePreview,
        imageUploadFun,
        beforeUpload,
        handleChange,
        saveImg,
      }
    },
  })
</script>
<style>
  /* .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  } */
</style>
