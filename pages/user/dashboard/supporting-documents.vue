<template>
   <div class="lg:max-w-2xl m-1">
        <CommonPageHeading title="Supporting Documents" description="Please attach the following documents with your application"/>
        

         <div class="mb-8 max-lg:mb-20" v-for="doc in documentsUpload" :key="doc.id">
            <div class="flex items-center justify-between">
                <h2 class="my-3">{{ doc.description }}</h2>
                <span v-if="hasFile === doc.id" class="text-green-400">ok</span>
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

        <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
        <button
          type="submit"
          
          class="btn btn-xl rounded-xl btn-secondary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-o"
        >Complete Application
          <!-- <span class="loading loading-spinner"></span> -->
          <!-- {{ stepStore.isLoading ? "Saving..." : "Complete Application" }} -->
          <span class="icon-[tabler--chevron-right] size-5"></span>
        </button>
      </div>

  </div>
</template>

<script setup>
import { documentsUpload } from "/assets/data/data";

const uploaded = ref({})
const hasFile = ref(null)

function handleSuccess(docId, { file }) {
  if (!uploaded.value[docId]) uploaded.value[docId] = []
    uploaded.value[docId].push(file.name)
    hasFile.value = hasFile.value === docId ? null : docId;
    // if (uploaded.value[docId] != {} ) {
    //     hasFile.value = true;
    // } else {
    //     hasFile.value = false;
    // }
//   console.log('Uploaded for', docId, ':', file.name)
}

function onError({ file, errorMessage }) {
//   console.error('Error uploading:', file.name, errorMessage)
}
</script>

<style scoped>

</style>
