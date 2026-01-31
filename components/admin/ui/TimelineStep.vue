<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
        Implementation Schedule
    </h3>

    <h4 class="font-semibold text-primary">Implementation Details</h4>
    <CommonInfoRow label="Completion Date" :value="implementationSchedule?.completionDate" />
    <CommonInfoRow label="Operation Date" :value="implementationSchedule?.operationDate" />

    <h4 class="font-semibold text-primary mt-4">projectTimeline phases</h4>
    <div class="flex items-center gap-4 w-full">
        <CommonInfoRow label="Project Timeline" :value="implementationSchedule?.projectTimeline?.phases" />
    </div>
  
  </div>
</template>

<script setup>
defineProps({
  implementationSchedule: {
      type: Object,
      required: true
   },
})
</script>
