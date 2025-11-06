<template>
    <div class="lg:max-w- m-1">
        <CommonPageHeading title="Total Investment Requirements" description="Capital expenditure breakdown" />
        
        <form action="" class="space-y-3 my-3">
            <!-- <div class="text-base font-medium text-">Capital expenditure breakdown : </div> -->
                <div class="space-y-4 w-2/3 max-lg:w-full">
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Currency: </div>
                        <CommonSelectVariant class="w-1/3 max-lg:w-full"
                        label="Currency Eg. $ "
                        :options="currencies"/>
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Land and site preparation: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Land & site preparation"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Buildings and infrastructure: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Buildings & infrastructure"
                            placeholder="0,00"
                            v-model="yearTwo"
                        />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Machinery and equipment: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Machinery & equipment"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>

                     <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Pre-operating expenses: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Pre-operating expenses"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>
                     <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Working capital: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Working capital"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>
                     <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Contingency (5-10%): </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Contingency"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Total Project Cost: </div>
                        <CommonInputsVariant class="w-1/3 max-lg:w-full"
                            type="text"
                            label="Total Project Cost"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>
                   
                </div>

            <div @click="navigateTo('financing-structure')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
import { currencies } from "/assets/data/data";

</script>