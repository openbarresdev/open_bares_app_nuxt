<template>
  <div>
    <div class="input-floating">
      <div class="relative">
        <textarea
          :placeholder="placeholder"
          :id="id"
          :value="modelValue"
          @input="onInput"
          :rows="rows"
          :maxlength="maxlength"
          class="input input-xl pr-10 bg-gray-100 border-none rounded-xl text-[1rem] resize-none min-h-[120px] p-2"
          :class="[resizable ? '' : 'resize-none']"
        ></textarea>

        <!-- Floating label -->
        <label class="input-floating-label text-[1rem]!" :for="id">
          {{ label }}
        </label>

        <!-- Character counter -->
        <div
          v-if="showCounter"
          class="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-1 rounded"
        >
          {{ modelValue?.length || 0 }}{{ maxlength ? `/${maxlength}` : '' }}
        </div>
      </div>
    </div>
    <span v-if="hasError" class="text-red-500 text-[0.85rem]">{{ errorMessage}}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: { type: String, default: 'Enter your text here...' },
  label: { type: String, required: true },
  id: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  rows: { type: Number, default: 4 },
  maxlength: { type: Number, default: null },
  showCounter: { type: Boolean, default: true },
  resizable: { type: Boolean, default: false },
  hasError: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>