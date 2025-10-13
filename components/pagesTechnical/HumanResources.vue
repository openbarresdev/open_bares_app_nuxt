<template>
    <div>
        
        <CommonPageHeading title="Human Resources" description="Required workforce" />


            <form @submit.prevent="submitToNext" class="mt-8">

                <div class="space-y-4 mx-1 lg:w-1/2 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Management positions</div>
                            <CommonInputsVariant class="w-full"
                                    type="number"
                                    label="Management positions"
                                    placeholder="0"
                                    v-model="mangt_position_number"
                                />
                    </div>
                    
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Technical/skilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Technical/skilled workers"
                            placeholder="0"
                            v-model="tech_skilled_workers_number"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Semi-skilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Semi-skilled workers"
                            placeholder="0"
                            v-model="semi_tech_skilled_workers_number"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Unskilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Unskilled workers"
                            placeholder="0"
                            v-model="unskilled_wokers_number"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Total employment</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Total employment"
                            placeholder="0"
                            v-model="total_employment"
                        />
                    </div>

                    <div class="lg:mt-0 mt-3 space-y-3 w-full">
                        <CommonPageHeading title="" description="Availability of required skills in local market" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label="Availability of required skills"
                            :rows="5"
                            placeholder="Provide your Availability of required skills in local market"
                            />
                    </div>
                </div>

                <div @click="navigateTo('infrastructure-requirements')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>

    </div>
</template>

<script setup></script>