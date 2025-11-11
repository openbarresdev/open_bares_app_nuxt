<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading 
            title="Your Profile"/>
        
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
            
            <!-- Resume of your application -->
            <div class="mt-10"> 
                <CommonPageHeading 
                    title="Start your application"
                    description="Complete the following information"/>

                <form action="" class="my-4 space-y-6">

                    <div class="grid grid-cols-8 w-full gap-3">
                        <div class="col-span-6">
                            <CommonInputsVariant
                                type="text"
                                label="Applicant name"
                                placeholder="John Tailor"
                            />
                        </div>
                        <div class="col-span-2">
                                <CommonSelectVariant
                                label="Title"
                                :options="titles"/>
                        </div>
                    </div>

                    <CommonInputsVariant
                            type="text"
                            label="Company name"
                            placeholder="Crownhill Funding"
                            v-model="city"
                        />

                    <CommonSelectVariant
                        label="Country or Territory"
                        :options="countries"/>
             
                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-4">

                        <CommonInputsVariant class="max-lg:w-full w-1/2"
                            type="text"
                            label="City"
                            placeholder="Yaounde"
                            v-model="city"
                        />
                        <CommonInputsVariant class="max-lg:w-full w-1/2"
                            type="text"
                            label="State"
                            placeholder="Center"
                            v-model="state"
                        />
                    </div>

                </form>
            </div>

            <CommonPageHeading class="mt-8"
                title="Project Description"
                description="Complete the following information concerning your project to be sponsored"
                
                />
                
                <form action="" class="my-4 space-y-6">
                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">
                        <CommonSelectVariant
                            label="Project type"
                            :options="options"/>

                        <CommonSelectVariant
                            label="Industrial sector"
                            :options="sectors"/>
                    </div>

                     <CommonTextArea 
                        v-model="project"
                        label="Project description"
                        :rows="3"
                        placeholder="Provide description of your project"
                        />

                        
                    <div @click="navigateTo('/user/dashboard/sponsorship/sponsor-information')" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-12">Submit</div>
                </form>
    </div>
</template>

<script setup>
import { titles, countries, industries, sectors, options  } from "/assets/data/data";

</script>