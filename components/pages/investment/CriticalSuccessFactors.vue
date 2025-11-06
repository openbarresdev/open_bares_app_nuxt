<template>
  <div>
    <div class="lg:max-w-[920px] m-1">
      <CommonPageHeading
        title="Critical Success Factors"
        description="Key factors determining profitability"
      />

      <form action="" class="space-y-3">
        <CommonTextArea
          class="mt-4"
          v-model="project"
          label="Key factors"
          :rows="8"
          placeholder="Provide the description of Key factors"
        />

    <div @click="navigateTo('government-incentives')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
      </form>
    </div>
  </div>
</template>

<script setup></script>
