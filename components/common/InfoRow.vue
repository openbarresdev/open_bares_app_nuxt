<template>
  <div class="flex items-center gap-4 text-sm">
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
})
</script>
