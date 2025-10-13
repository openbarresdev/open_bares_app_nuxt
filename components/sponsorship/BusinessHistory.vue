<template>
    <div class="max-w-2xl m-1">
        <CommonPageHeading title="Sponsor Business History" description="Brief history and current business activities of sponsors" />

        <CommonPageHeading title="" description="" variant="true"/>

        <form action="" class="space-y-3">
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Business description"
                :rows="5"
                placeholder="Provide your business description"
                />

            <div class="text-base font-medium text-black">Annual Revenue (Last 3 Years): </div>
                <div class="space-y-4 w-2/3 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm min-w-32">Currency: </div>
                        <CommonSelectVariant class="w-full"
                        label="Currency Eg. $ "
                        :options="currencies"/>
                    </div>

                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm min-w-32">Year 1: </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="First year revenu"
                            placeholder="0,00"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm min-w-32">Year 2: </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Second year revenu"
                            placeholder="0,00"
                            v-model="yearTwo"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm min-w-32">Year 3: </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Third year revenu"
                            placeholder="0,00"
                            v-model="yearThree"
                        />
                    </div>

                    <div class="mt-6 space-y-2">
                        <p class="lg:text-base max-lg:text-sm p-1"> Total Assets</p>
                        <div class="flex inline-flex items-center gap-2 w-full">
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="Total asset"
                                    placeholder="0,00"
                                    v-model="totalAssets"
                                />
                        </div>

                        <p class="lg:text-base max-lg:text-sm p-1">Net worth </p>
                        <div class="flex inline-flex items-center gap-2 w-full">
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="Net worth"
                                    placeholder="0,00"
                                    v-model="netWorth"
                                />
                        </div>
                    </div>
                </div>

            <div class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-12 my-3">Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>

    </div>
</template>

<script setup>
import { currencies, countries } from "/assets/data/data";

</script>