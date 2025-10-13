<template>
    <div>
        <CommonPageHeading title="Structure Management" description="Proposed management arrangements for the project" />

        <!-- <CommonPageHeading title="" description="Proposed management arrangements for the project" variant="true"/> -->

        <form action="" class="space-y-3">
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Business description"
                :rows="5"
                placeholder="Provide your business description"
                />

            <div class="text-base font-medium text-black p-1">Key Management Personnel </div>
            
            <div class="lg:flex max-lg:flex-col items-center gap-4 w-full">

                <div class="space-y-3 mx-1 lg:w-1/2 max-lg:w-full">
                    <p class="lg:text-base max-lg:text-sm mb-8"> Chief Executive Officer/General Manager</p>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Name </div>
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="CEO / Manager Name"
                                    placeholder="John Wick"
                                    v-model="CEOName"
                                />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2"> </div>
                            <CommonSelectVariant class="w-full"
                                label="Experience"
                                :options="years"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Previous relevant positions </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Previous position"
                            placeholder="Manager"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Education </div>
                         <CommonSelectVariant class="w-full"
                                label="Education"
                                :options="education"/>
                    </div>
                </div>

                <div class="space-y-3 mx-1 lg:w-1/2 max-lg:w-full max-lg:mt-12">
                    <p class="lg:text-base max-lg:text-sm mb-8">Chief Financial Officer</p>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Name </div>
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="CEO / Manager Name"
                                    placeholder="John Wick"
                                    v-model="CEOName"
                                />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2"> </div>
                            <CommonSelectVariant class="w-full"
                                label="Experience"
                                :options="years"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Previous relevant positions </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Previous position"
                            placeholder="Manager"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Education </div>
                        <CommonSelectVariant class="w-full"
                                label="Education"
                                :options="education"/>
                    </div>
                </div>

            </div>

            <div class="lg:flex max-lg:flex-col items-center gap-4 w-full mt-12">

                <div class="space-y-3 mx-1 lg:w-1/2 max-lg:w-full">
                    <p class="lg:text-base max-lg:text-sm mb-8">Chief Technical Officer/Operations Manager</p>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Name </div>
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="CEO / Manager Name"
                                    placeholder="John Wick"
                                    v-model="CEOName"
                                />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2"> </div>
                            <CommonSelectVariant class="w-full"
                                label="Experience"
                                :options="years"/>
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Previous relevant positions </div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Previous position"
                            placeholder="Manager"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Education </div>
                         <CommonSelectVariant class="w-full"
                                label="Education"
                                :options="education"/>
                    </div>
                </div>

            </div>

            <div class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>

    </div>
</template>

<script setup>
import { education, years } from "/assets/data/data";

</script>