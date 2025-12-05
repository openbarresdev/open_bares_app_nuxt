<template>
    <div>
        <div class="flex max-lg:flex-col lg:gap-4 lg:items-center my-4 px-2 py-4 text-white bg-primary/60 rounded-md">
            <h2 class="lg:min-w-44">Application status</h2> 
            <div class="flex items-center gap-3 justify-between w-full max-lg:mb-2">
                <!-- Progress bar -->
                <div class="progress h-4 w-full" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar w-1/4 font-normal">25%</div>
                </div>
                <div class="font-bold">
                    25%
                </div>
            </div>
            <div class="btn btn-xl rounded-xl btn-neutral btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-10">Continuer</div>
        </div>
    </div>
</template>

<script setup>
import { useDataStore } from '~/stores/dataStore';
const dataStore = useDataStore();

onMounted(() => {
    dataStore.calculatePercentage()
})

</script>