<template>
    <div>
        <div class="flex gap-2">
            <input type="checkbox" 
                class="checkbox checkbox-primary mt-2" 
                :id="id"
                :checked="modelValue"
                @change="$emit('update:modelValue', $event.target.checked)"
            />
            <label :for="id" class="label-text cursor-pointer flex flex-col">
                <span class="text-base font-medium">{{ label }}</span>
                <span class="text-sm text-gray-500">{{ description }}</span>
            </label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: false },
  description: { type: string, required: false },
  id: { type: String, default: '' },
  modelValue: { type: Boolean, default: '' }
})

const emit = defineEmits(['update:modelValue'])

// const props = withDefaults(defineProps<Props>(), {
//   id: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`,
//   description: ''
// })

// defineEmits<{
//   'update:modelValue': [value: boolean]
// }>()
</script>