<template>
  <div class="lg:max-w-[920px] m-1">
    <CommonPageHeading title="Regulatory Environment" description="Exchange control regulations" />

    <form @submit.prevent="submitRegulatoryEnvironment" class="space-y-3 mt-6 w-2/3 max-lg:w-full">
      <div class="lg:mt-0 mt-3 space-y-6 w-full">
        <CommonTextArea 
          class="mt-4"
          v-model="exchangeControlRegulations"
          label="Exchange control regulations"
          :rows="5"
          placeholder="Provide Exchange control regulations here"
          :hasError="!!exchangeControlRegulationsError"
          :errorMessage="exchangeControlRegulationsError"
        />
      </div>

      <div class="lg:mt-0 mt-3 space-y-6 w-full">
        <CommonPageHeading title="" description="Capital entry conditions" />
        <CommonTextArea 
          class="mt-4"
          v-model="capitalEntryConditions"
          label="Capital entry conditions expected"
          :rows="5"
          placeholder="Provide Capital entry conditions here"
          :hasError="!!capitalEntryConditionsError"
          :errorMessage="capitalEntryConditionsError"
        />
      </div>

      <div class="lg:mt-0 mt-3 space-y-6 w-full">
        <CommonPageHeading title="" description="Capital repatriation conditions" />
        <CommonTextArea 
          class="mt-4"
          v-model="capitalRepatriationConditions"
          label="Capital repatriation conditions expected"
          :rows="5"
          placeholder="Provide Capital repatriation conditions here"
          :hasError="!!capitalRepatriationConditionsError"
          :errorMessage="capitalRepatriationConditionsError"
        />
      </div>

      <div class="lg:mt-0 mt-3 space-y-6 w-full">
        <CommonPageHeading title="" description="Other relevant regulations" />
        <CommonTextArea 
          class="mt-4"
          v-model="otherRelevantRegulations"
          label="Other relevant regulations expected"
          :rows="5"
          placeholder="Provide Other relevant regulations"
          :hasError="!!otherRelevantRegulationsError"
          :errorMessage="otherRelevantRegulationsError"
        />
      </div>

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
import { regulatoryEnvironment } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const nextPage = usePageNav()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: regulatoryEnvironment,
})

// Define fields with useField (converted to camelCase)
const { value: exchangeControlRegulations, errorMessage: exchangeControlRegulationsError } = useField('exchangeControlRegulations')
const { value: capitalEntryConditions, errorMessage: capitalEntryConditionsError } = useField('capitalEntryConditions')
const { value: capitalRepatriationConditions, errorMessage: capitalRepatriationConditionsError } = useField('capitalRepatriationConditions')
const { value: otherRelevantRegulations, errorMessage: otherRelevantRegulationsError } = useField('otherRelevantRegulations')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('government', projectId.value)

      if (stepStore.state?.regulatoryEnvironment) {
        setValues({
            exchangeControlRegulations: stepStore.state?.regulatoryEnvironment.exchangeControlRegulations || "",
            capitalEntryConditions: stepStore.state?.regulatoryEnvironment.capitalEntryConditions || "",
            capitalRepatriationConditions: stepStore.state?.regulatoryEnvironment.capitalRepatriationConditions || "",
            otherRelevantRegulations: stepStore.state?.regulatoryEnvironment.otherRelevantRegulations || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching regulatory environment:', error)
  }
})

const submitRegulatoryEnvironment = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'government',
      'regulatoryEnvironment',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Regulatory environment saved successfully!')
    nextPage.goToNextPage('project-timeline/implementation-schedule')
  } catch (error) {
    $notyf.error('Failed to save regulatory environment')
  }
})
</script>