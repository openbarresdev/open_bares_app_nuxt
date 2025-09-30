<template>
  <div>
    <div class="input-floating">
      <div class="relative">
        <input
          :type="currentType"
          :placeholder="placeholder"
          :id="id"
          class="input input-xl pr-10"
        />

        <!-- Floating label for all inputs -->
        <label class="input-floating-label" :for="id">{{ label }}</label>

        <!-- Password toggle button -->
        <button
          v-if="type === 'password'"
          type="button"
          @click="togglePassword"
          class="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center"
          :aria-label="`Toggle password visibility for ${label}`"
        >
          <span v-if="showPassword" class="icon-[tabler--eye-off] size-5 shrink-0"></span>
          <span v-else class="icon-[tabler--eye] size-5 shrink-0"></span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "Enter text" },
  label: { type: String, required: true },
  id: { type: String, default: "" },
});

const showPassword = ref(false);
const currentType = computed(() =>
  props.type === "password" && showPassword.value ? "text" : props.type
);

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>
