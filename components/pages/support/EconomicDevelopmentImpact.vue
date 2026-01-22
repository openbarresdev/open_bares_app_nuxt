<template>
  <div class="lg:max-w-[920px] m-1">
    <CommonPageHeading title="Economic Development Impact" description="Economic Development Impact" />

    <form @submit.prevent="submitEconomicImpact" class="space-y-3 mt-6 w-2/3 max-lg:w-full">
      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">Employment creation</div>
        <CommonInputsVariant 
          class="w-full"
          type="number"
          label="Employment creation"
          placeholder="0 jobs"
          v-model="employmentCreation"
          :hasError="!!employmentCreationError"
          :errorMessage="employmentCreationError"
        />
      </div>
      
      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">Technology transfer</div>
        <CommonInputsVariant 
          class="w-full"
          type="number"
          label="Technology transfer"
          placeholder="0"
          v-model="technologyTransfer"
          :hasError="!!technologyTransferError"
          :errorMessage="technologyTransferError"
        />
      </div>

      <div class="lg:mt-0 mt-3 space-y-6 w-full">
        <CommonPageHeading title="" description="Skills development" />
        <CommonTextArea 
          class="mt-4"
          v-model="skillsDevelopment"
          label="Skills development expected"
          :rows="5"
          placeholder="Provide Skills development"
          :hasError="!!skillsDevelopmentError"
          :errorMessage="skillsDevelopmentError"
        />
      </div>

      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">Export earnings</div>
        <CommonInputsVariant 
          class="w-full"
          type="number"
          label="Export earnings"
          placeholder="Export earnings amount"
          v-model="exportEarnings"
          :hasError="!!exportEarningsError"
          :errorMessage="exportEarningsError"
        />
      </div>

      <div class="inline-flex items-center gap-2 w-full">
        <div class="lg:text-base max-lg:text-sm w-1/2">Import substitution</div>
        <CommonInputsVariant 
          class="w-full"
          type="number"
          label="Import substitution"
          placeholder="Import substitution amount"
          v-model="importSubstitution"
          :hasError="!!importSubstitutionError"
          :errorMessage="importSubstitutionError"
        />
      </div>

      <div class="lg:mt-0 mt-3 space-y-6 w-full max-lg:mb-20">
        <CommonPageHeading title="" description="Other benefits" />
        <CommonTextArea 
          class="mt-4"
          v-model="otherBenefits"
          label="Other benefits expected"
          :rows="5"
          placeholder="Provide Other benefits"
          :hasError="!!otherBenefitsError"
          :errorMessage="otherBenefitsError"
        />
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
import { economicDevelopmentImpact } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: economicDevelopmentImpact,
})

// Define fields with useField (converted to camelCase)
const { value: employmentCreation, errorMessage: employmentCreationError } = useField('employmentCreation')
const { value: technologyTransfer, errorMessage: technologyTransferError } = useField('technologyTransfer')
const { value: skillsDevelopment, errorMessage: skillsDevelopmentError } = useField('skillsDevelopment')
const { value: exportEarnings, errorMessage: exportEarningsError } = useField('exportEarnings')
const { value: importSubstitution, errorMessage: importSubstitutionError } = useField('importSubstitution')
const { value: otherBenefits, errorMessage: otherBenefitsError } = useField('otherBenefits')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('government', projectId.value)

      if (stepStore.state?.economicImpact) {
        setValues({
            employmentCreation: stepStore.state?.economicImpact.employmentCreation || "",
            technologyTransfer: stepStore.state?.economicImpact.technologyTransfer || "",
            skillsDevelopment: stepStore.state?.economicImpact.skillsDevelopment || "",
            exportEarnings: stepStore.state?.economicImpact.exportEarnings || "",
            importSubstitution: stepStore.state?.economicImpact.importSubstitution || "",
            otherBenefits: stepStore.state?.economicImpact.otherBenefits || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching economic development impact:', error)
  }
})

const submitEconomicImpact = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'government',
      'economicImpact',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Economic development impact saved successfully!')
    navigateTo('regulatory-environment')
  } catch (error) {
    $notyf.error('Failed to save economic development impact')
  }
})
</script>