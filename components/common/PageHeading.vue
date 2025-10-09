<template>
    <div>
        <div class="mt-4"> 
            <h1 class="font-medium text-black">{{ title }}</h1>
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Page title' },

})
</script>