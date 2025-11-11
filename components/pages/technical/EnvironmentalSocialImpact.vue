<template>
    <div>
        <CommonPageHeading title="Environmental & Social Impact" description="" />

        <form @submit.prevent="submitToNext" class="space-y-4">
        <CommonPageHeading title="" description="Potential environmental issue" />
             <CommonTextArea class="mt-6"
                v-model="environmental_issues_desc"
                label="Environmental issue"
                :rows="5"
                placeholder="Provide potential environmental issue"
                />

        <CommonPageHeading title="" description="Mitigation measures planned" />
             <CommonTextArea class="mt-4"
                v-model="mitigation_measures_desc"
                label="Mitigation measures"
                :rows="5"
                placeholder="Describe your mitigation measures planned"
                />

         <CommonPageHeading title="" description="Expected social benefits" />
             <CommonTextArea class="mt-4"
                v-model="social_benefits_desc"
                label="Social benefits"
                :rows="5"
                placeholder="Describe your expected social benefits"
                />

        <div @click="nextPage.goToNextPage('investment-and-financing/total-investment-requirements')" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
const nextPage = usePageNav();
</script>