<template>
  <div class="bg-white rounded-xl border p-4 space-y-3">

    <h3 class="text-lg font-semibold text-primary mb-3">
      Applicant / Project Information
    </h3>

    <CommonInfoRow label="Applicant Name" :value="project?.applicantName" />
    <CommonInfoRow label="Applicant Title" :value="project?.applicantTitle" />
    <CommonInfoRow label="Company Name" :value="project?.companyName" />
    <CommonInfoRow label="Country" :value="project?.country" />
    <CommonInfoRow label="City" :value="project?.city" />
    <CommonInfoRow label="State" :value="project?.state" />
    <CommonInfoRow label="Project Type" :value="project?.projectType" />
    <CommonInfoRow label="Industrial Sector" :value="project?.industrialSector" />

    <div class="">
      <p class="text-sm font-semibold text-black last:border-none inline-flex w-fit rounded-full bg-gray-100 px-2.5 py-1.5 mb-2">
        Project Description
      </p>
      <p class="text-sm text-gray-800 whitespace-pre-line mx-2">
        {{ project?.projectDescription || '—' }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
