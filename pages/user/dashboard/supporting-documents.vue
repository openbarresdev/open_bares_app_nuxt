<template>
   <div class="lg:max-w-2xl m-1">
        <CommonPageHeading title="Supporting Documents" description="Please attach the following documents with your application"/>
        

         <div class="mb-8" v-for="doc in documentsUpload" :key="doc.id">
            <div class="flex items-center justify-between">
                <h2 class="my-3">{{ doc.description }}</h2>
                <span>ok</span>
            </div>
            <CommonDropzoneUploader
                :uploadUrl="`/api/upload?docId=${doc.id}`"
                :maxSize="5"
                acceptedFiles=".pdf,.jpg,.png"
                :docName="doc.name"
                @success="(file) => handleSuccess(doc.id, file)"
                @error="onError"
            />
        
            <!-- <a :href="`/api//${doc.name}`" target="_blank">View</a> -->

        </div>

  </div>
</template>

<script setup>
import { documentsUpload } from "/assets/data/data";

const uploaded = ref({})

function handleSuccess(docId, { file }) {
  if (!uploaded.value[docId]) uploaded.value[docId] = []
  uploaded.value[docId].push(file.name)
  console.log('✅ Uploaded for', docId, ':', file.name)
}

function onError({ file, errorMessage }) {
  console.error('Error uploading:', file.name, errorMessage)
}
</script>

<style scoped>

</style>
