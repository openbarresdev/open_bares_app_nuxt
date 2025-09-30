<template>
  <div>

    <div class="input-floating max-w-sm">
      <input
        :type="type"
        :placeholder="placeholder"
        :id="id"
        class="input input-xl"
      />
      <label class="input-floating-label" :for="id">{{ label }}</label>
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: 'Enter text' },
  label: { type: String, required: true },
  id: { type: String, default: '' },
})
</script>
