
<template>
  <div class="max-lg:grid max-lg:grid-cols-2 grid-cols-4 flex gap-4">
    <label
      v-for="option in options"
      :key="option.value"
      class="custom-option border-zinc-300 flex sm:w-1/2 flex-row items-start gap-3 cursor-pointer border-none bg-gray-100 h-13.5"
      :class="{ 'bg-white': modelValue === option.value }"
    >
      <input
        type="radio"
        
        :value="option.value"
        :checked="modelValue === option.value"
        class="radio hidden"
        @change="$emit('update:modelValue', option.value)"
      />
      <span class="label-text w-full text-start">
        <span class="flex justify-between" :class="{'mb-1' : option.description}">
          <span class="text-sm font-medium">{{ option.value }}</span>
          
        </span>
        <span class="text-[0.85rem]-content/80">{{ option.description }}</span>
      </span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
    options: { type: Array },
    // name: { type: String },
    modelValue: { type: String }
})

const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>
</style>