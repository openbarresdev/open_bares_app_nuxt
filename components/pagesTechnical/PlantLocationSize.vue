<template>
    <div>
        
        <CommonPageHeading title="Plant Location & Size" description="Proposed location in relation to" />


            <form @submit.prevent="submitToNext" class="mt-8">

                <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Suppliers</div>
                            <CommonInputsVariant class="w-full"
                                    type="number"
                                    label="Location: Eg. Akra"
                                    placeholder="Eg. Akra"
                                    v-model="raw_material_costs"
                                />
                    </div>
                    
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Markets</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Location: Eg. South Africa"
                            placeholder="Eg. South Africa"
                            v-model="labor_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Infrastructure</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Location: Eg. Ethiopia"
                            placeholder="Eg. Ethiopia"
                            v-model="utilities_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Workforce</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Location: Eg. Cameroon"
                            placeholder="Eg. Cameroon"
                            v-model="maintenance_costs"
                        />
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm">Plant size comparison with industry standards</div>
                            <CommonSelectVariant class="w-full"
                                label="Select plant size"
                                :options="nothing"/>
                    </div>
                </div>

                <div @click="navigateTo('environmental-and-social-impact')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>

    </div>
</template>

<script setup>
import { currencies } from "/assets/data/data";

</script>