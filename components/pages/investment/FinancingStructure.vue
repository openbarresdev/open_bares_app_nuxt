<template>
    <div class="lg:max-w-[864px] m-1">
        <CommonPageHeading title="Financing Structure" description="Proposed sources of financing" />
        
        <form action="" class="space-y-3 my-3">
                <div class="space-y-4 w-2/3 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Currency: </div>
                        <CommonSelectVariant class="w-2/5 max-lg:w-full"
                        label="Currency Eg. $ "
                        :options="currencies"/>
                    </div>

                    <div class="flex flex-col space-y-3 w-full">
                        <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Sponsor equity: </div>
                        <div class="flex gap-3 justify-between ">
                            <CommonInputsVariant class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Sponsor equity"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                            <CommonSelectVariant class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"/>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-3 w-full">
                        <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Requested financing: </div>
                        <div class="flex gap-3 justify-between ">
                            <CommonInputsVariant class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Requested financing"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                            <CommonSelectVariant class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"/>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-3 w-full">
                        <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Government grants/incentives: </div>
                        <div class="flex gap-3 justify-between ">
                            <CommonInputsVariant class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Government grants/incentives"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                            <CommonSelectVariant class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"/>
                        </div>
                    </div>

                     <div class="flex flex-col space-y-3 w-full">
                        <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Others: </div>
                        <div class="flex gap-3 justify-between ">
                            <CommonInputsVariant class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Others"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                            <CommonSelectVariant class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"/>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-3 w-full">
                        <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Total: </div>
                        <div class="flex gap-3 justify-between ">
                            <CommonInputsVariant class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Total"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                            <CommonSelectVariant class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"/>
                        </div>
                    </div>
                
                </div>

            <div @click="navigateTo('type-of-financing-requested')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
import { percentages, currencies } from "/assets/data/data";

</script>