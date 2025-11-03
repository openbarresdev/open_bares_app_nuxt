<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading 
            title="Sponsor Infos"
            description="Complete the following information concerning sponsorship"/>
                
            <form action="" class="my-4 space-y-6">
                <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">

                 <CommonInputsVariant class="lg:w-2/3 w-full"
                    type="text"
                    label="Lead Sponsor/Company Name"
                    placeholder="MTN"
                    v-model="sponsor"
                />

                 <CommonInputsVariant class="lg:w-1/3 w-full"
                    type="text"
                    label="Registration Number"
                    placeholder="HSNIW12N3J4"
                    v-model="regnumber"
                />
                </div>

                <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">

                    <CommonSelectVariant class="lg:w-1/2 w-full"
                        label="Country of Incorporation"
                        :options="countries"/>

                    <CommonDateInput class="lg:w-1/2 w-full"
                       v-model="selectedDate"
                        label="Date of Incorporation"
                        placeholder="Select your date of Incorporation"
                        :options="{
                            maxDate: new Date(),
                            dateFormat: 'd-m-Y'
                        }"
                    />
                </div>

                <div class="text-base">Legal structure</div>
                    
                <CommonRadiaButton
                    v-model="selectedPlan"
                    
                    :options="legalStructure"
                    />

                    <!-- {{ selectedPlan }} -->
                <div @click="navigateTo('sponsor-business-history')" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>
    </div>
</template>

<script setup>
import { countries, legalStructure } from "/assets/data/data";
const selectedPlan = ref();
</script>