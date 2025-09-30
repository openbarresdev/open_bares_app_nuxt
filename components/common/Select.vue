<template>
    <div class="select-floating max-w-sm">
        <select :id="selectId" class="select w-full" :aria-label="label">
            <option v-for="(option, id) in options" :key="id" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <label class="select-floating-label" :for="selectId">
            {{ label }}
        </label>
    </div>
</template>

<script setup>
// import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
    label: { type: String, required: true },
    options: {
        type: Array,
        required: true
    },
    id: { type: String, default: '' }
})

// const emits = defineEmits(['update:modelValue'])

const selectId = computed(
    () => props.id || `select-${Math.random().toString(36).substr(2, 9)}`
)
</script>
