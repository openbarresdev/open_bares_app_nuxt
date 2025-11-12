<template>
  <div>
    <div ref="dropzoneEl" class="dropzone"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

const props = defineProps({
  uploadUrl: { type: String, default: '/api/upload' },
  maxSize: { type: Number, default: 5 },
  acceptedFiles: { type: String, default: '.pdf,.jpg,.png,.doc,.docx' },
  multiple: { type: Boolean, default: true }
})

const emit = defineEmits(['success', 'error', 'added', 'removed'])

Dropzone.autoDiscover = false

const dropzoneEl = ref(null)
let myDropzone= null

onMounted(() => {
  myDropzone = new Dropzone(dropzoneEl.value, {
    url: props.uploadUrl,
    paramName: 'file',
    maxFilesize: props.maxSize,
    acceptedFiles: props.acceptedFiles,
    uploadMultiple: props.multiple,
    clickable: true,
    addRemoveLinks: true,
    init: function () {
      this.on('addedfile', (file) => emit('added', file))
      this.on('removedfile', (file) => emit('removed', file))
      this.on('success', (file, response) => emit('success', { file, response }))
      this.on('error', (file, errorMessage) => emit('error', { file, errorMessage }))
    }
  })
})

onBeforeUnmount(() => {
  if (myDropzone) myDropzone.destroy()
})
</script>

<style scoped>
.dropzone {
  border: 2px dashed #999;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  color: #777;
  transition: background 0.3s;
}
.dropzone:hover {
  background: #f9f9f9;
}
</style>
