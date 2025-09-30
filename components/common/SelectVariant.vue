<template>
  <div class="select-floating relative">
    <select
      :id="selectId"
      class="select w-full bg-gray-100 h-14 border-none rounded-xl"
      :aria-label="label"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @change="onChange"
    >
      <option value="" disabled selected></option>
      <!-- <option value="label" disabled hidden></option> -->
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
      class="input-floating-label transition-all duration-200 absolute pointer-events-none"
      :for="selectId"
      :class="{
        'text-xs -top-1 left-2 px-1 bg-white text-primary!': isFocused || selectedValue,
        'top-1/2 left-3 -translate-y-1/2 text-[1rem]!': !isFocused && !selectedValue
      }"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  id: { type: String, default: '' }
})

const selectId = computed(
  () => props.id || `select-${Math.random().toString(36).substr(2, 9)}`
)

const isFocused = ref(false)
const selectedValue = ref('')

function onChange(event) {
  const target = event.target
  selectedValue.value = target.value
}

</script>

<style scoped></style>
