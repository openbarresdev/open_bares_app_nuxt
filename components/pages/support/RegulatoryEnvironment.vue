<template>
      <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Regulatory Environment" description="Exchange control regulations" />

            <form action="" class="space-y-3 mt-6 w-2/3 max-lg:w-full">

                    <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <!-- <CommonPageHeading title="" description="Skills development" /> -->
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label="Exchange control regulations"
                            :rows="5"
                            placeholder="Provide Exchange control regulations here"
                            />
                    </div>

                     <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description="Capital entry conditions" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label=" Capital entry conditions expected"
                            :rows="5"
                            placeholder="Provide Capital entry conditions here"
                            />
                    </div>

                     <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description="Capital repatriation conditions" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label="Capital repatriation conditions expected"
                            :rows="5"
                            placeholder="Provide Capital repatriation conditions here"
                            />
                    </div>

                     <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description="Other relevant regulations" />
                        <CommonTextArea class="mt-4"
                            v-model="available_skills_required"
                            label="Other relevant regulations expected"
                            :rows="5"
                            placeholder="Provide Other relevant regulations"
                            />
                    </div>

                <div @click="go"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>
            </form>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const go = () => {
    const url = route.fullPath;
    const parentPath = url.replace(/\/[^/]*$/, '');
    const secondParentPath = parentPath.replace(/\/[^/]*$/, '');
    navigateTo(`${secondParentPath}/project-timeline/implementation-schedule`)
}
</script>