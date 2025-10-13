<template>
    <div>
        <CommonPageHeading title="Technical Complexity" description="Special technical complexities and required expertise" />

        <form @submit.prevent="submitToNext">
             <CommonTextArea class="mt-4"
                v-model="special_tech_complexities_desc"
                label="Special technical complexities"
                :rows="5"
                placeholder="Provide your Special technical complexities"
                />

        <CommonPageHeading title="" description="Key equipment suppliers" />
             <CommonTextArea class="mt-4"
                v-model="key_equipement_desc"
                label="Key equipment suppliers"
                :rows="5"
                placeholder="Provide your Key equipment suppliers"
                />

        <div @click="navigateTo('human-resources')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>

</script>