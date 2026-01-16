<template>
    <div class="lg:max-w-[864px] m-1">
        <CommonPageHeading title="Financing Structure" description="Proposed sources of financing" />
        
        <form @submit.prevent="submitFinancingStructure" class="space-y-3 my-3">
            <div class="space-y-4 w-2/3 max-lg:w-full">
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-3/5 max-lg:min-w-32">Currency: </div>
                    <CommonSelectVariant 
                        class="w-2/5 max-lg:w-full"
                        label="Currency Eg. $ "
                        :options="currencies"
                        v-model="currency"
                        :hasError="!!currencyError"
                        :errorMessage="currencyError"
                    />
                </div>

                <div class="flex flex-col space-y-3 w-full">
                    <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Sponsor equity: </div>
                    <div class="flex gap-3 justify-between ">
                        <CommonInputsVariant 
                            class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Sponsor equity"
                            placeholder="0,00"
                            v-model="sponsorEquityAmount"
                            :hasError="!!sponsorEquityAmountError"
                            :errorMessage="sponsorEquityAmountError"
                        />
                        <CommonSelectVariant 
                            class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"
                            v-model="sponsorEquityPercentage"
                            :hasError="!!sponsorEquityPercentageError"
                            :errorMessage="sponsorEquityPercentageError"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-3 w-full">
                    <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Requested financing: </div>
                    <div class="flex gap-3 justify-between ">
                        <CommonInputsVariant 
                            class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Requested financing"
                            placeholder="0,00"
                            v-model="requestedFinancingAmount"
                            :hasError="!!requestedFinancingAmountError"
                            :errorMessage="requestedFinancingAmountError"
                        />
                        <CommonSelectVariant 
                            class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"
                            v-model="requestedFinancingPercentage"
                            :hasError="!!requestedFinancingPercentageError"
                            :errorMessage="requestedFinancingPercentageError"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-3 w-full">
                    <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Government grants/incentives: </div>
                    <div class="flex gap-3 justify-between ">
                        <CommonInputsVariant 
                            class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Government grants/incentives"
                            placeholder="0,00"
                            v-model="governmentGrantsAmount"
                            :hasError="!!governmentGrantsAmountError"
                            :errorMessage="governmentGrantsAmountError"
                        />
                        <CommonSelectVariant 
                            class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"
                            v-model="governmentGrantsPercentage"
                            :hasError="!!governmentGrantsPercentageError"
                            :errorMessage="governmentGrantsPercentageError"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-3 w-full">
                    <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Others: </div>
                    <div class="flex gap-3 justify-between ">
                        <CommonInputsVariant 
                            class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Others"
                            placeholder="0,00"
                            v-model="othersAmount"
                            :hasError="!!othersAmountError"
                            :errorMessage="othersAmountError"
                        />
                        <CommonSelectVariant 
                            class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"
                            v-model="othersPercentage"
                            :hasError="!!othersPercentageError"
                            :errorMessage="othersPercentageError"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-3 w-full">
                    <div class="lg:text-base max-lg:text-sm max-lg:min-w-full">Total: </div>
                    <div class="flex gap-3 justify-between ">
                        <CommonInputsVariant 
                            class="w-3/5 max-lg:w-full"
                            type="text"
                            label="Total"
                            placeholder="0,00"
                            v-model="totalAmount"
                            :hasError="!!totalAmountError"
                            :errorMessage="totalAmountError"
                        />
                        <CommonSelectVariant 
                            class="w-2/5 max-lg:w-30"
                            label="%"
                            :options="percentages"
                            v-model="totalPercentage"
                            :hasError="!!totalPercentageError"
                            :errorMessage="totalPercentageError"
                        />
                    </div>
                </div>
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
import { financingStructure } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"
import { percentages, currencies } from "/assets/data/data"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: financingStructure,
})

// Define fields with useField (converted to camelCase)
const { value: currency, errorMessage: currencyError } = useField('currency')

// Sponsor Equity
const { value: sponsorEquityAmount, errorMessage: sponsorEquityAmountError } = useField('sponsorEquityAmount')
const { value: sponsorEquityPercentage, errorMessage: sponsorEquityPercentageError } = useField('sponsorEquityPercentage')

// Requested Financing
const { value: requestedFinancingAmount, errorMessage: requestedFinancingAmountError } = useField('requestedFinancingAmount')
const { value: requestedFinancingPercentage, errorMessage: requestedFinancingPercentageError } = useField('requestedFinancingPercentage')

// Government Grants
const { value: governmentGrantsAmount, errorMessage: governmentGrantsAmountError } = useField('governmentGrantsAmount')
const { value: governmentGrantsPercentage, errorMessage: governmentGrantsPercentageError } = useField('governmentGrantsPercentage')

// Others
const { value: othersAmount, errorMessage: othersAmountError } = useField('othersAmount')
const { value: othersPercentage, errorMessage: othersPercentageError } = useField('othersPercentage')

// Total
const { value: totalAmount, errorMessage: totalAmountError } = useField('totalAmount')
const { value: totalPercentage, errorMessage: totalPercentageError } = useField('totalPercentage')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('investment', projectId.value)

      if (stepStore.state?.financingType) {
        setValues({
            currency: stepStore.state?.financingType.currency || "",
            sponsorEquityAmount: stepStore.state?.financingType.sponsorEquityAmount || "",
            sponsorEquityPercentage: stepStore.state?.financingType.sponsorEquityPercentage || "",
            requestedFinancingAmount: stepStore.state?.financingType.requestedFinancingAmount || "",
            requestedFinancingPercentage: stepStore.state?.financingType.requestedFinancingPercentage || "",
            governmentGrantsAmount: stepStore.state?.financingType.governmentGrantsAmount || "",
            governmentGrantsPercentage: stepStore.state?.financingType.governmentGrantsPercentage || "",
            othersAmount: stepStore.state?.financingType.othersAmount || "",
            othersPercentage: stepStore.state?.financingType.othersPercentage || "",
            totalAmount: stepStore.state?.financingType.totalAmount || "",
            totalPercentage: stepStore.state?.financingType.totalPercentage || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching financing structure:', error)
  }
})

const submitFinancingStructure = handleSubmit(async (values) => {
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
      
    $notyf.success('Financing structure saved successfully!')
    navigateTo('type-of-financing-requested')
  } catch (error) {
    $notyf.error('Failed to save financing structure')
  }
})
</script>