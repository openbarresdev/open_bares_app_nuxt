<template>
    <div>
        
        <CommonPageHeading title="Infrastructure Requirements" description="Availability of infrastructure facilities" />

            <form @submit.prevent="submitToNext" class="mt-8 space-y-3">

                <div class="space-y-4 mx-1 lg:w-1/2 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Transportation</div>
                            <CommonSelectVariant class="w-full"
                                label="Status of Transportation"
                                :options="levels"/>
                    </div>
                    
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Communications</div>
                         <CommonSelectVariant class="w-full"
                                label="Status of communication"
                                :options="levels"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Power supply</div>
                        <CommonSelectVariant class="w-full"
                                label="Status of Power supply"
                                :options="levels"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Water supply</div>
                         <CommonSelectVariant class="w-full"
                                label="Status of Water supply"
                                :options="levels"/>
                    </div>
                </div>

                <div @click="navigateTo('operating-costs-annual')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>

    </div>
</template>

<script setup>
import { levels } from "/assets/data/data";

</script>