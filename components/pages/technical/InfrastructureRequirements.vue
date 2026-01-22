<template>
    <div>
        
        <CommonPageHeading title="Infrastructure Requirements" description="Availability of infrastructure facilities" />

             <form @submit.prevent="submitInfrastructureRequirements" class="mt-8 space-y-6">

                <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Transportation</div>
                            <CommonSelectVariant class="w-full"
                                label="Status of Transportation"
                                :options="levels"
                                v-model="transportationStatus"
                                :hasError="!!transportationStatusError"
                                :errorMessage="transportationStatusError"
                                />
                    </div>
                    
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Communications</div>
                         <CommonSelectVariant class="w-full"
                                label="Status of communication"
                                :options="levels"
                                v-model="communicationsStatus"
                                :hasError="!!communicationsStatusError"
                                :errorMessage="communicationsStatusError"
                                />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Power supply</div>
                        <CommonSelectVariant class="w-full"
                                label="Status of Power supply"
                                :options="levels"
                                v-model="powerSupplyStatus"
                                :hasError="!!powerSupplyStatusError"
                                :errorMessage="powerSupplyStatusError"
                                />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Water supply</div>
                         <CommonSelectVariant class="w-full"
                                label="Status of Water supply"
                                :options="levels"
                                v-model="waterSupplyStatus"
                                :hasError="!!waterSupplyStatusError"
                                :errorMessage="waterSupplyStatusError"
                                />
                    </div>
                </div>
                <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
                  <button 
                     type="submit" :disabled="hasValidationErrors"
                     class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-1"
                         > 
                     <span v-if="stepStore.isLoading" class="loading loading-spinner"></span>
                     {{ stepStore.isLoading ? 'Saving...' : 'Save & Continue' }}
                     <span class="icon-[tabler--chevron-right] size-5"></span>
                 </button>
                </div>
            </form>

    </div>
</template>

<script setup>
import { levels } from "/assets/data/data";

import { infrastructureRequirements } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: infrastructureRequirements,
})

const { value: transportationStatus, errorMessage: transportationStatusError } = useField('transportationStatus');
const { value: communicationsStatus, errorMessage: communicationsStatusError } = useField('communicationsStatus');
const { value: powerSupplyStatus, errorMessage: powerSupplyStatusError } = useField('powerSupplyStatus');
const { value: waterSupplyStatus, errorMessage: waterSupplyStatusError } = useField('waterSupplyStatus');

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth()
  
  try {
    
    if (projectId.value) {
      await stepStore.fetchStep('technical', projectId.value)

      if (stepStore.state?.infrastructure) {
        setValues({
            transportationStatus: stepStore.state?.infrastructure.transportationStatus || "",
            communicationsStatus: stepStore.state?.infrastructure.communicationsStatus || "",
            powerSupplyStatus: stepStore.state?.infrastructure.powerSupplyStatus || "",
            waterSupplyStatus: stepStore.state?.infrastructure.waterSupplyStatus || ""
        });
      }
    }
  } catch (error) {
  }
})

const submitInfrastructureRequirements = handleSubmit(async (values) => {
  
  // console.log('Values', values);
  await checkAuth()
  // await profileStore.getProjectId(userId.value)

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'technical',
      'infrastructure',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Data saved successfully!')
    navigateTo('operating-costs-annual')
  } catch (error) {
    $notyf.error('Failed to save data')
  }
})
</script>