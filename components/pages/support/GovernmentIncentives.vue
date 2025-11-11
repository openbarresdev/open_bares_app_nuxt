<template>
     <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Government Incentives" description="Specific government incentives available" />

            <form action="" class="space-y-3 my-3 w-2/3 max-lg:w-full">

                <div class="gap-3.5 grid grid-cols-2 max-lg:grid-cols-1">
                    <div class="flex flex-wrap items-center" v-for="(data, index) in govincentives" :data="data" :index="data.id">
                        <label class="custom-soft-option flex flex-row items-start gap-3 w-full border-none py-4.5">
                            <input type="checkbox" class="checkbox checkbox-primary checkbox-sm"/>
                            <span class="label-text w-full text-start">
                            <span class="flex justify-between mb-1">
                                <span class="text-sm font-medium">{{ data.value }}</span>
                                <!-- <span class="text-base-content/50 text-base">Free</span> -->
                            </span>
                            <span class="text-base-content/80">{{ data.dscription }}</span>
                            <span v-show="data.id === 5 && checked" class="text-base-content/80">Input for other</span>
                            </span>
                        </label>
                    </div>
                </div>

                <CommonTextArea
                    class="mt-9"
                    v-model="project"
                    label="Other details"
                    :rows="8"
                    placeholder="Provide the description of Other details"
                    />

                <div @click="navigateTo('economic-development-impact')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

            </form>
    </div>
</template>

<script setup>
const govincentives = [
    {id:1, value:"Tax holidays"},
    {id:2, value:"Duty exemptions"},
    {id:3, value:"Investment allowances"},
    {id:4, value:"Export incentives" },
    {id:5, value:"Infrastructure support" },
    {id:6, value:"Other"}
]
</script>