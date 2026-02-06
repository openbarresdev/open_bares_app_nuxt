<template>
  <div>
    <div
      class="flex max-lg:flex-col lg:gap-4 lg:items-center my-1 px-2 lg:py-4 py-1 text-white bg-primary/60 rounded-md"
    >
      <h2 class="lg:min-w-44">Application status</h2>

      <div class="flex items-center gap-3 justify-between w-full max-lg:mb-2">

        <!-- Progress bar -->
        <div
          v-if="!dataStore.isLoading && !dataStore.isFirstSteps"
          class="progress h-4 w-full"
          role="progressbar"
          :aria-valuenow="dataStore.percentageProgress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
  class="progress-bar font-normal transition-all duration-300 flex items-center justify-center"
  :class="dataStore.completedStepsCount === 8 ? 'bg-secondary text-black font-bold!' : ''"
  :style="{ width: dataStore.percentageProgress + '%' }"
>
            {{ dataStore.completedStepsCount }}/{{ dataStore.totalSteps }} étapes
          </div>
        </div>

        <!-- Empty -->
        <div
          v-else
          class="progress h-4 w-full"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar font-normal w-0">
            0/8 étapes
          </div>
        </div>

        <!-- Percentage -->
        <div class="font-bold">
          {{ dataStore.isLoading || dataStore.isFirstSteps ? 0 : dataStore.percentageProgress }}%
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useDataStore } from '~/stores/dataStore';

const { userId, projectId, checkAuth } = useAuth();

const dataStore = useDataStore();

onMounted(async () => {
    await checkAuth();

    try {
        if (userId.value && projectId.value) {
            await dataStore.loadSteps(userId, projectId)
           }
        } catch (error) {
        console.error(error);
    }
})

</script>