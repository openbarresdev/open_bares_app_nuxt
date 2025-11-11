<template>

    <div>
        <CommonAccordion :title="title" :id="id" :initial-open="state" :description="description">
            <form action="" class="space-y-3">
                <div class="space-y-6 px-1.5 w-full">
                   
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">
                          Start date
                        </div>
                        <CommonDateInput class="lg:w-1/2 w-full"
                            v-model="selectedDate"
                            label="Start Date "
                            placeholder="Select your Start Date "
                            :options="{
                                maxDate: new Date(),
                                dateFormat: 'd-m-Y'
                            }"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">
                            End date
                        </div>
                        <CommonDateInput class="lg:w-1/2 w-full"
                            v-model="selectedDate"
                            label="End Date "
                            placeholder="Select your End Date "
                            :options="{
                                maxDate: new Date(),
                                dateFormat: 'd-m-Y'
                            }"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">
                            Duration
                        </div>
                         <CommonSelectVariant class="lg:w-1/2 w-full"
                                label="Duration"
                                :options="years"/>
                    </div>

                 </div>

                <div
                    @click=""
                    class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
                >
                    Save <span class="icon-[tabler--chevron-right] size-5"></span>
                </div>
            </form>
        </CommonAccordion>
    </div>
</template>

<script setup>
import { years } from "/assets/data/data";

const props = defineProps({
  title: { type: String, required: true },
  id: { type: String },
  description: { type: String },
  state: { type: Boolean, required: true },
  
})
</script>