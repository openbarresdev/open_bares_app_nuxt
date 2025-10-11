<template>
    <div>
        <div class="lg:mt-4 mt-1"> 
            <h1 class="font-medium text-black text-lg">{{ title }}</h1>
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Page title' },

})
</script>