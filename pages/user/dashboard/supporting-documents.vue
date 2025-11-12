<template>
   <div class="lg:max-w-2xl m-1">
        <CommonPageHeading title="Supporting Documents" description="Please attach the following documents with your application"/>
        
         <div class="mb-8" v-for="doc in documents" :key="doc.id">
            <div class="flex items-center justify-between">
                <h2 class="my-3">{{ doc.name }}</h2>
                <span>ok</span>
            </div>
            <CommonDropzoneUploader
                :uploadUrl="`/api/upload?docId=${doc.id}`"
                :maxSize="5"
                acceptedFiles=".pdf,.jpg,.png"
                @success="(file) => handleSuccess(doc.id, file)"
                @error="onError"
            />
        </div>

  </div>
</template>

<script setup>
const uploaded = ref({})
const documents = [
    { id: 1, name: 'Company Registration' },
    { id: 2, name: 'Tax Certificate' },
    { id: 3, name: 'Proof of Address' }
];

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
