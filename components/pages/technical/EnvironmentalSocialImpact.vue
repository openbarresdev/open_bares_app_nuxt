<template>
    <div>
        <CommonPageHeading title="Environmental & Social Impact" description="" />

        <form @submit.prevent="submitEnvironmentalImpact" class="space-y-4">
            <CommonPageHeading title="" description="Potential environmental issue" />
            <CommonTextArea 
                class="mt-6"
                v-model="environmentalIssuesDesc"
                label="Environmental issue"
                :rows="5"
                placeholder="Provide potential environmental issue"
                :hasError="!!environmentalIssuesDescError"
                :errorMessage="environmentalIssuesDescError"
            />

            <CommonPageHeading title="" description="Mitigation measures planned" />
            <CommonTextArea 
                class="mt-4"
                v-model="mitigationMeasuresDesc"
                label="Mitigation measures"
                :rows="5"
                placeholder="Describe your mitigation measures planned"
                :hasError="!!mitigationMeasuresDescError"
                :errorMessage="mitigationMeasuresDescError"
            />

            <CommonPageHeading title="" description="Expected social benefits" />
            <CommonTextArea 
                class="mt-4"
                v-model="socialBenefitsDesc"
                label="Social benefits"
                :rows="5"
                placeholder="Describe your expected social benefits"
                :hasError="!!socialBenefitsDescError"
                :errorMessage="socialBenefitsDescError"
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
import { environmentalAndSocialImpact } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const nextPage = usePageNav()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: environmentalAndSocialImpact,
})

// Define fields with useField (converted to camelCase)
const { value: environmentalIssuesDesc, errorMessage: environmentalIssuesDescError } = useField('environmentalIssuesDesc')
const { value: mitigationMeasuresDesc, errorMessage: mitigationMeasuresDescError } = useField('mitigationMeasuresDesc')
const { value: socialBenefitsDesc, errorMessage: socialBenefitsDescError } = useField('socialBenefitsDesc')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('technical', projectId.value)

      if (stepStore.state?.environmentalImpact) {
        setValues({
            environmentalIssuesDesc: stepStore.state?.environmentalImpact.environmentalIssuesDesc || "",
            mitigationMeasuresDesc: stepStore.state?.environmentalImpact.mitigationMeasuresDesc || "",
            socialBenefitsDesc: stepStore.state?.environmentalImpact.socialBenefitsDesc || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching environmental impact data:', error)
  }
})

const submitEnvironmentalImpact = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'technical',
      'environmentalImpact',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Environmental & social impact saved successfully!')
    nextPage.goToNextPage('investment-and-financing/total-investment-requirements')
  } catch (error) {
    $notyf.error('Failed to save environmental & social impact')
  }
})
</script>