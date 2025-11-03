<template>
    <div>
        <CommonPageHeading title="Target Market" description="Primary target customers/users" />

         <form action="" class="space-y-6">
             <CommonTextArea class="mt-6"
                v-model="project"
                label="Primary customers/users"
                :rows="5"
                placeholder="Provide your Primary customers/users"
                />

            <CommonPageHeading title="" description="Distribution channels to be used" />
                <CommonRadiaButton
                    v-model="selectedPlan"
                    :options="channels"
                    />

            <div @click="navigateTo('market-environment')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
import { channels } from "/assets/data/data";
const selectedPlan = ref();

</script>