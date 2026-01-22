<template>
    <div>
        <CommonPageHeading title="Plant Location & Size" description="Proposed location in relation to" />

        <form @submit.prevent="submitPlantLocation" class="mt-8">
            <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Suppliers</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="text"
                        label="Location: Eg. Akra"
                        placeholder="Eg. Akra"
                        v-model="suppliersLocation"
                        :hasError="!!suppliersLocationError"
                        :errorMessage="suppliersLocationError"
                    />
                </div>
                
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Markets</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="text"
                        label="Location: Eg. South Africa"
                        placeholder="Eg. South Africa"
                        v-model="marketsLocation"
                        :hasError="!!marketsLocationError"
                        :errorMessage="marketsLocationError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Infrastructure</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="text"
                        label="Location: Eg. Ethiopia"
                        placeholder="Eg. Ethiopia"
                        v-model="infrastructureLocation"
                        :hasError="!!infrastructureLocationError"
                        :errorMessage="infrastructureLocationError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Workforce</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="text"
                        label="Location: Eg. Cameroon"
                        placeholder="Eg. Cameroon"
                        v-model="workforceLocation"
                        :hasError="!!workforceLocationError"
                        :errorMessage="workforceLocationError"
                    />
                </div>
                <div class="flex-col gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm mb-6">Plant size comparison with industry standards</div>
                    <CommonSelectVariant 
                        class="w-full"
                        label="Select plant size"
                        :options="plantSizeOptions"
                        v-model="plantSize"
                        :hasError="!!plantSizeError"
                        :errorMessage="plantSizeError"
                    />
                </div>
            </div>
            <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
              <button 
                  type="submit" 
                  :disabled="hasValidationErrors"
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-0"
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
import { plantLocationAndSize } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"
import { plantSizeOptions } from "../assets/data/data";


const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: plantLocationAndSize,
})

// Define fields with useField (converted to camelCase)
const { value: suppliersLocation, errorMessage: suppliersLocationError } = useField('suppliersLocation')
const { value: marketsLocation, errorMessage: marketsLocationError } = useField('marketsLocation')
const { value: infrastructureLocation, errorMessage: infrastructureLocationError } = useField('infrastructureLocation')
const { value: workforceLocation, errorMessage: workforceLocationError } = useField('workforceLocation')
const { value: plantSize, errorMessage: plantSizeError } = useField('plantSize')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('technical', projectId.value)

      // console.log('data', stepStore.state.technical);
      
      if (stepStore.state?.plantLocationSize) {
        setValues({
            suppliersLocation: stepStore.state?.plantLocationSize.suppliersLocation || "",
            marketsLocation: stepStore.state?.plantLocationSize.marketsLocation || "",
            infrastructureLocation: stepStore.state?.plantLocationSize.infrastructureLocation || "",
            workforceLocation: stepStore.state?.plantLocationSize.workforceLocation || "",
            plantSize: stepStore.state?.plantLocationSize.plantSize || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching plant location data:', error)
  }
})

const submitPlantLocation = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'technical',
      'plantLocationSize',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Plant location & size saved successfully!')
    navigateTo('environmental-and-social-impact')
  } catch (error) {
    $notyf.error('Failed to save plant location & size')
  }
})
</script>