<template>
    <div>
        <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Type of Financing Requested" description="Please select the financial type" />

            <form @submit.prevent="submitFinancingType" class="space-y-3 my-3 w-3/4 max-lg:w-full">
                <div class="gap-3.5 grid grid-cols-2 max-lg:grid-cols-1">
                    <div class="flex flex-wrap items-center" v-for="data in financeTypeData" :key="data.id">
                        <label class="custom-soft-option flex flex-row items-start gap-3 w-full border-none py-4.5">
                            <input 
                                type="radio" 
                                class="checkbox checkbox-primary checkbox-sm"
                                :value="data.value"
                                v-model="financingTypes"
                                @change="handleFinancingTypeChange(data.value)"
                            />
                            <span class="label-text w-full text-start">
                                <span class="flex justify-between mb-1">
                                    <span class="text-sm font-medium">{{ data.value }}</span>
                                </span>
                                <span class="text-base-content/80">{{ data.description || data.dscription }} </span>
                                <div v-if="data.value === 'Other'" class="mt-6">
                                    <CommonInputsVariant 
                                        type="text"
                                        label="Specify other financing type"
                                        placeholder="Enter other financing type"
                                        v-model="otherFinancingType"
                                        :hasError="!!otherFinancingTypeError"
                                        :errorMessage="otherFinancingTypeError"
                                        class="w-full"
                                    />
                                </div>
                            </span>
                        </label>
                    </div>
                </div>

                <div class="space-y-4 max-lg:mb-20">
                    <div class="inline-flex items-center justify-between gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Currency: </div>
                        <CommonSelectVariant 
                            class="w-40"
                            label=" "
                            :options="currencies"
                            v-model="currency"
                            :hasError="!!currencyError"
                            :errorMessage="currencyError"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Requested amount: </div>
                        <CommonInputsVariant 
                            class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Requested amount"
                            placeholder="0,00"
                            v-model="requestedAmount"
                            :hasError="!!requestedAmountError"
                            :errorMessage="requestedAmountError"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Proposed tenor: </div>
                        <CommonInputsVariant 
                            class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Proposed tenor (in Years)"
                            placeholder="3 Years"
                            v-model="proposedTenor"
                            :hasError="!!proposedTenorError"
                            :errorMessage="proposedTenorError"
                        />
                    </div>

                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Preferred grace period: </div>
                        <CommonInputsVariant 
                            class="w-2/5 max-lg:w-full"
                            type="text"
                            label="Grace period (in Months)"
                            placeholder="12 Months"
                            v-model="gracePeriod"
                            :hasError="!!gracePeriodError"
                            :errorMessage="gracePeriodError"
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
    </div>
</template>

<script setup>
import { typeOfFinancingRequested } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useDataStore } from '~/stores/dataStore';
import { useForm, useField } from "vee-validate"
import { currencies, financeTypeData } from "/assets/data/data"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const dataStore = useDataStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: typeOfFinancingRequested,
})

// Define fields with useField
const { value: financingTypes, errorMessage: financingTypesError } = useField('financingTypes')
const { value: otherFinancingType, errorMessage: otherFinancingTypeError } = useField('otherFinancingType')
const { value: currency, errorMessage: currencyError } = useField('currency')
const { value: requestedAmount, errorMessage: requestedAmountError } = useField('requestedAmount')
const { value: proposedTenor, errorMessage: proposedTenorError } = useField('proposedTenor')
const { value: gracePeriod, errorMessage: gracePeriodError } = useField('gracePeriod')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

// Handle financing type selection
const handleFinancingTypeChange = (value) => {
  if (value === 'Other' && !financingTypes.value.includes('Other')) {
    otherFinancingType.value = ''
  }
}

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('investment', projectId.value)

      if (userId.value) {
            await dataStore.loadSteps(userId.value, projectId.value)
      }
        
      if (stepStore.state?.financingType) {
        setValues({
             currency: dataStore.preferences.currency || "",
          // currency: stepStore.state?.financingType.currency || "",
            financingTypes: stepStore.state?.financingType.financingTypes || [],
            otherFinancingType: stepStore.state?.financingType.otherFinancingType || "",
            requestedAmount: stepStore.state?.financingType.requestedAmount || "",
            proposedTenor: stepStore.state?.financingType.proposedTenor || "",
            gracePeriod: stepStore.state?.financingType.gracePeriod || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching financing type data:', error)
  }
})

const submitFinancingType = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'investment',
      'financingType',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Financing type saved successfully!')
    navigateTo('financial-projections')
  } catch (error) {
    $notyf.error('Failed to save financing type')
  }
})
</script>