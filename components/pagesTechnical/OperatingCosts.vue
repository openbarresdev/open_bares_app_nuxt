<template>
    <div>
        
        <CommonPageHeading title="Operating Costs (Annual)" description="Breakdown of projected operating costs" />


            <form @submit.prevent="submitToNext" class="mt-8 space-y=6">

                <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">currency</div>
                            <CommonSelectVariant class="w-full"
                                label="Select currency"
                                :options="currencies"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Raw materials</div>
                            <CommonInputsVariant class="w-full"
                                    type="number"
                                    label="Raw materials Costs"
                                    placeholder="0"
                                    v-model="raw_material_costs"
                                />
                    </div>
                    
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Labor costs</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Labor costs"
                            placeholder="0"
                            v-model="labor_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Utilities</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Utilities Costs"
                            placeholder="0"
                            v-model="utilities_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Maintenance</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Maintenance Costs"
                            placeholder="0"
                            v-model="maintenance_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Administration</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Administration Costs"
                            placeholder="0"
                            v-model="administration_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Marketing/Sales</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Marketing/Sales Costs"
                            placeholder="0"
                            v-model="marketing_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Other</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Other Costs"
                            placeholder="0"
                            v-model="other_costs"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Total Operating Costs</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Total Operating Costs"
                            placeholder="0"
                            v-model="total_operating_costs"
                        />
                    </div>
                </div>

                <div @click="navigateTo('raw-materials-and-supply-chain')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-6">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>

    </div>
</template>

<script setup>
import { currencies } from "/assets/data/data";

</script>