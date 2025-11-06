<template>
    <div>
         <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Type of Financing Requested" description="Please select the financial type" />

            <form action="" class="space-y-3 my-3 w-2/3 max-lg:w-full">

                <div class="gap-3.5 grid grid-cols-2 max-lg:grid-cols-1">
                    <div class="flex flex-wrap items-center" v-for="(data, index) in financeTypeData" :data="data" :index="data.id">
                        <label class="custom-soft-option flex flex-row items-start gap-3 w-full border-none py-4.5">
                            <input type="checkbox" class="checkbox checkbox-primary checkbox-sm"/>
                            <span class="label-text w-full text-start">
                            <span class="flex justify-between mb-1">
                                <span class="text-sm font-medium">{{ data.value }}</span>
                                <!-- <span class="text-base-content/50 text-base">Free</span> -->
                            </span>
                            <span class="text-base-content/80">{{ data.dscription }}</span>
                            <span v-show="data.id === 5 && checked" class="text-base-content/80">Input for other</span>
                            </span>
                        </label>
                    </div>
                </div>

                <div class="space-y-4 ">
                    <div class="inline-flex items-center justify-between gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Currency: </div>
                        <CommonSelectVariant class="w-30"
                        label=" "
                        :options="currencies"/>
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                            <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Requested amount: </div>
                        <CommonInputsVariant class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Requested amount"
                            placeholder="0,00"
                            v-model="req"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Proposed tenor: </div>
                        <CommonInputsVariant class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Proposed tenor (in Years)"
                            placeholder="3 Years"
                            v-model="req"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Preferred grace period: </div>
                         <CommonInputsVariant class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Grace period (in Months)"
                            placeholder="12 Months"
                            v-model="req"
                        />
                    </div>
                </div>
                
                <div @click="navigateTo('financial-projections')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

            </form>
        </div>
    </div>
</template>

<script setup>
import { currencies, legalStructure } from "/assets/data/data";
const financeTypeData = [
    {id:1, value:"Loan"},
    {id:2, value:"Equity investment"},
    {id:3, value:"Quasi-equity"},
    {id:4, value:"Combination of financial products" },
    {id:5, value:"Other"}
]
const selectedPlan = ref();
</script>