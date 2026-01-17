<template>
  <div class="lg:max-w-[920px] m-1">
    <CommonPageHeading title="Government Incentives" description="Specific government incentives available" />

    <form @submit.prevent="submitGovernmentIncentives" class="space-y-3 my-3 w-2/3 max-lg:w-full">
      <div class="gap-3.5 grid grid-cols-2 max-lg:grid-cols-1">
        <div class="flex flex-wrap items-center" v-for="data in govincentives" :key="data.id">
          <label class="custom-soft-option flex flex-row items-start gap-3 w-full border-none py-4.5">
            <input 
              type="checkbox" 
              class="checkbox checkbox-primary checkbox-sm"
              :value="data.value"
              :checked="isChecked(data.value)"
              @change="handleCheckboxChange(data.value, $event)"
            />
            <span class="label-text w-full text-start">
              <span class="flex justify-between mb-1">
                <span class="text-sm font-medium">{{ data.value }}</span>
              </span>
              <div v-if="data.value === 'Other' && isChecked('Other')" class="mt-4">
                <CommonInputsVariant 
                  type="text"
                  label="Specify other incentive"
                  placeholder="Enter other government incentive"
                  v-model="otherIncentive"
                  :hasError="!!otherIncentiveError"
                  :errorMessage="otherIncentiveError"
                  class="w-full"
                />
              </div>
            </span>
          </label>
        </div>
      </div>

      <div v-if="selectedIncentivesError" class="text-error text-sm mt-1">
        {{ selectedIncentivesError }}
      </div>

      <CommonTextArea
        class="mt-9"
        v-model="otherDetails"
        label="Other details"
        :rows="8"
        placeholder="Provide the description of Other details"
        :hasError="!!otherDetailsError"
        :errorMessage="otherDetailsError"
      />

      <button 
        type="submit" 
        :disabled="hasValidationErrors"
        class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3"
      > 
        <span v-if="stepStore.isLoading" class="loading loading-spinner"></span>
        {{ stepStore.isLoading ? 'Saving...' : 'Save & Continue' }}
        <span class="icon-[tabler--chevron-right] size-5"></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { governmentIncentives } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"
import { govincentives } from "../assets/data/data"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: governmentIncentives,
})

// Define fields with useField
const { value: selectedIncentives, errorMessage: selectedIncentivesError } = useField('selectedIncentives')
const { value: otherIncentive, errorMessage: otherIncentiveError } = useField('otherIncentive')
const { value: otherDetails, errorMessage: otherDetailsError } = useField('otherDetails')

// Initialize as empty array if undefined
if (!selectedIncentives.value) {
  selectedIncentives.value = []
}

// Check if a specific value is selected
const isChecked = (value) => {
  return selectedIncentives.value && Array.isArray(selectedIncentives.value) 
    ? selectedIncentives.value.includes(value)
    : false
}

// Handle checkbox changes
const handleCheckboxChange = (value, event) => {
  const isChecked = event.target.checked
  
  if (!selectedIncentives.value) {
    selectedIncentives.value = []
  }
  
  if (isChecked) {
    // Add value if not already in array
    if (!selectedIncentives.value.includes(value)) {
      selectedIncentives.value = [...selectedIncentives.value, value]
    }
  } else {
    // Remove value from array
    selectedIncentives.value = selectedIncentives.value.filter(item => item !== value)
    
    // Clear otherIncentive if "Other" is deselected
    if (value === 'Other') {
      otherIncentive.value = ''
    }
  }
}

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('government', projectId.value)

      if (stepStore.state?.incentives) {
        const data = stepStore.state.incentives
        
        // Ensure selectedIncentives is always an array
        const incentives = data.selectedIncentives || []
        
        setValues({
            selectedIncentives: Array.isArray(incentives) ? incentives : [],
            otherIncentive: data.otherIncentive || "",
            otherDetails: data.otherDetails || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching government incentives:', error)
  }
})

const submitGovernmentIncentives = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'government',
      'incentives',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Government incentives saved successfully!')
    navigateTo('economic-development-impact')
  } catch (error) {
    $notyf.error('Failed to save government incentives')
  }
})
</script>