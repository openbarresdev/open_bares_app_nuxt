<template>
    <div>
        <CommonPageHeading title="Target Market" description="Primary target customers/users" />

         <form action="" class="space-y-3">
             <CommonTextArea class="mt-4"
                v-model="project"
                label="Primary customers/users"
                :rows="5"
                placeholder="Provide your Primary customers/users"
                />

            <CommonPageHeading title="" description="Distribution channels to be used" />
             <div class="py-3 p-1">
                <CommonRadiaButton
                    v-model="selectedPlan"
                    name=""
                    :options="channels"
                    />
            </div>

            <div class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-12 my-3">Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

        </form>
    </div>
</template>

<script setup>
import { channels } from "/assets/data/data";

</script>