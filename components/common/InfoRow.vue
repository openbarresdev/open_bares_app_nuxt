<template>
  <div v-if="textArea">
    <p class="text-sm font-semibold text-black last:border-none inline-flex w-fit rounded-full bg-gray-100 px-2.5 py-1.5 mb-2">
        {{ label }}
    </p>
    <p class="text-sm text-gray-800 whitespace-pre-line mx-2">
      {{ value || '—' }}
    </p>
  </div>

  <div v-else class="flex items-center gap-4 text-sm">
    <div class="font-semibold text-black last:border-none inline-flex w-fit rounded-full bg-gray-100 px-2.5 py-1.5">
      {{ label }}
    </div>
    <div class="text-slate-800 font-medium capitalize">
      {{ value || '—' }}
    </div>
  </div>

  
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  textArea: Boolean
})
</script>
