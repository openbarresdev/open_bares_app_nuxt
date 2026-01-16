<template>
  <div>
    <div class="lg:max-w-[920px] m-1">
      <CommonPageHeading
        title="Critical Success Factors"
        description="Key factors determining profitability"
      />

      <form @submit.prevent="submitCriticalSuccessFactors" class="space-y-3">
        <CommonTextArea
          class="mt-4"
          v-model="keyFactors"
          label="Key factors"
          :rows="20"
          placeholder="Provide the description of Key factors"
          :hasError="!!keyFactorsError"
          :errorMessage="keyFactorsError"
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
  </div>
</template>

<script setup>
import { criticalSuccessFactors } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const nextPage = usePageNav()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: criticalSuccessFactors,
})

// Define fields with useField
const { value: keyFactors, errorMessage: keyFactorsError } = useField('keyFactors')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('investment', projectId.value)

      if (stepStore.state?.successFactors) {
        setValues({
            keyFactors: stepStore.state?.successFactors.keyFactors || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching critical success factors:', error)
  }
})

const submitCriticalSuccessFactors = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'investment',
      'successFactors',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Critical success factors saved successfully!')
    nextPage.goToNextPage('government-support/government-incentives')
  } catch (error) {
    $notyf.error('Failed to save critical success factors')
  }
})
</script>