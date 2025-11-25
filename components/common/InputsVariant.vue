<template>
  <div>
    <div class="input-floating">
      <div class="relative">
        <input
          :type="currentType"
          :placeholder="placeholder"
          :id="id"
          :value="modelValue"
          @input="onInput"
          class="input input-xl pr-10 bg-gray-100 border-none rounded-xl text-[1rem] placeholder:text-sm"
        />

        <!-- Floating label -->
        <label class="input-floating-label lg:text-[1rem] text-base! line-clamp-1! after:content-['*'] after:ml-0.5 after:text-red-500" :for="id">
          {{ label }}
        </label>

        <!-- Password toggle -->
        <button
          v-if="type === 'password'"
          type="button"
          @click="togglePassword"
          class="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center"
          :aria-label="`Toggle password visibility for ${label}`"
        >
          <span
            v-if="showPassword"
            class="icon-[tabler--eye-off] size-5 shrink-0 mr-1"
          ></span>
          <span
            v-else
            class="icon-[tabler--eye] size-5 shrink-0 mr-1"
          ></span>
        </button>
      </div>
    </div>
    <span v-if="hasError" class="text-red-500 text-[0.85rem]">{{ errorMessage}}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Enter text' },
  label: { type: String, required: true },
  id: { type: String, default: '' },
  modelValue: { type: [String, Number, Object], default: '' },
  hasError: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },

})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const currentType = computed(() =>
  props.type === 'password' && showPassword.value ? 'text' : props.type
)

function onInput(event) {
  emit('update:modelValue', event.target.value)
}

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
