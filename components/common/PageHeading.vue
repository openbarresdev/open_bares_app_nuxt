<template>
    <div>
        <div v-if="!variant" class="lg:mt-4 mt-1"> 
            <h1 class="font-medium text-black text-lg">{{ title }}</h1>
            <span class="text-sm lg:text-sm leading-4">{{ description }}</span>
       </div>

        <div v-else class="mt-10 mb-3"> 
          <h1 class="font-medium text-black">{{ title }}</h1>
          <span class="text-sm lg:text-sm leading-4">{{ description }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  variant:{ type: Boolean, default:false }
})
</script>