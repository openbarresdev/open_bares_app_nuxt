<template>
    <div>
        <CommonPageHeading title="Market Environment" description="Current sources of supply for similar products/services" />

        <form action="" class="space-y-4">
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Current sources of supply"
                :rows="5"
                placeholder="Provide your Current sources of supply"
                />

        <CommonPageHeading title="" description="Main competitors and competitive advantages" />
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Main competitors"
                :rows="5"
                placeholder="Provide your main competitors"
                />
        <CommonPageHeading title="" description="Potential for market substitution by alternative products" />

                 <CommonTextArea class="mt-4"
                v-model="project"
                label="market substitution"
                :rows="5"
                placeholder="Provide your market substitution"
                />

        <CommonPageHeading title="" description="Tariff protection or import restrictions affecting your products" />
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Tariff protection or import restrictions"
                :rows="5"
                placeholder="Provide your Tariff protection or import restrictions"
                />
        <CommonPageHeading title="" description="Critical factors determining market potential" />

                 <CommonTextArea class="mt-4"
                v-model="project"
                label="Critical factors"
                :rows="5"
                placeholder="Provide your Critical factors"
                />

        <div @click="nextPage.goToNextPage('technical/technical-complexity')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
const nextPage = usePageNav();
</script>