<template>
  <div>
  
      <div class="select-floating relative">
        <select
          :id="selectId"
          class="select w-full bg-gray-100 h-14 border-none rounded-xl"
          :aria-label="label"
          :value="modelValue"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @change="onChange"
        >
          <option value="" disabled selected></option>

          <option
            v-for="(option, id) in options"
            :key="id"
            :value="option.value"
          >
            {{ option.value }}
          </option>
        </select>

        <!-- Floating label -->
        <label
          class="input-floating-label transition-all duration-200 absolute pointer-events-none after:content-['*'] after:ml-0.5 after:text-red-500"
          :for="selectId"
          :class="{
            '-top-1 left-2 px-1 bg-white text-primary! text-[0.8rem]': isFocused || modelValue,
            'top-1/2 left-3 -translate-y-1/2 lg:text-[1rem] max-lg:text-base': !isFocused && !modelValue
          }"
        >
          {{ label }}
        </label>
      </div>
      <span v-if="hasError" class="text-red-500 text-[0.85rem]">{{ errorMessage}}</span>

    </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  id: { type: String, default: '' },
  modelValue: { type: [String, Number, Object], default: '' },
  hasError: { type: Boolean, default: 'false' },
  errorMessage: { type: String, default: '' },

})

const emit = defineEmits(["update:modelValue"])

const selectId = computed(
  () => props.id || `select-${Math.random().toString(36).substr(2, 9)}`
)

const isFocused = ref(false)

function onChange(event) {
  emit("update:modelValue", event.target.value)
}
</script>
