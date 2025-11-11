<template>
      <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Economic Development Impact" description="Economic Development Impact" />

            <form action="" class="space-y-3 mt-6 w-2/3 max-lg:w-full">

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Employment creation</div>
                            <CommonInputsVariant class="w-full"
                                    type="number"
                                    label="Employment creation"
                                    placeholder="jobs"
                                    v-model="mangt_position_number"
                                />
                    </div>
                    
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Technology transfer</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Technology transfer"
                            placeholder="0"
                            v-model="tech_skilled_workers_number"
                        />
                    </div>

                    <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description="Skills development" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label="Skills development expected"
                            :rows="5"
                            placeholder="Provide Skills development"
                            />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Export earnings</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Export earnings"
                            placeholder="Export earnings ammount"
                            v-model="total_employment"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Import substitution</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Import substitution"
                            placeholder="Import substitution ammount"
                            v-model="total_employment"
                        />
                    </div>

                     <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description=" Other benefits" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label=" Other benefits expected"
                            :rows="5"
                            placeholder="Provide Other benefits"
                            />
                    </div>

                <div @click="navigateTo('regulatory-environment')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>
    </div>
</template>

<script setup></script>