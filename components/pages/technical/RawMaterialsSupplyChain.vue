<template>
    <div>
        <CommonPageHeading title="Raw Materials & Supply Chain" description="Source and cost of raw materials" />

        <form @submit.prevent="submitToNext" class="space-y-4">
            <CommonTextArea class="mt-6"
                v-model="special_tech_complexities_desc"
                label="Source of raw materials"
                :rows="5"
                placeholder="Provide the Source of raw materials"
                />

            <CommonPageHeading title="" description="Quality assurance measures" />
            <CommonTextArea class="mt-4"
                v-model="key_equipement_desc"
                label="Quality assurance measures"
                :rows="5"
                placeholder="Provide your Quality assurance measures"
                />

            <CommonPageHeading title="" description="Import restrictions on required materials" />
            <CommonTextArea class="mt-4"
                v-model="key_equipement_desc"
                label="Import restrictions"
                :rows="5"
                placeholder="Provide Import restrictions on the required materials"
                />

        <div @click="navigateTo('plant-location-and-size')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup></script>