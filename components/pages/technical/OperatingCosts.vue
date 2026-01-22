<template>
    <div>
        <CommonPageHeading title="Operating Costs (Annual)" description="Breakdown of projected operating costs" />

        <form @submit.prevent="submitOperatingCost" class="mt-8 space-y-6">
            <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Currency</div>
                    <CommonSelectVariant 
                        class="w-full"
                        label="Select currency"
                        :options="currencies"
                        v-model="currency"
                        :hasError="!!currencyError"
                        :errorMessage="currencyError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Raw materials</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Raw materials Costs"
                        placeholder="0"
                        v-model="rawMaterialCosts"
                        :hasError="!!rawMaterialCostsError"
                        :errorMessage="rawMaterialCostsError"
                    />
                </div>
                
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Labor costs</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Labor costs"
                        placeholder="0"
                        v-model="laborCosts"
                        :hasError="!!laborCostsError"
                        :errorMessage="laborCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Utilities</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Utilities Costs"
                        placeholder="0"
                        v-model="utilitiesCosts"
                        :hasError="!!utilitiesCostsError"
                        :errorMessage="utilitiesCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Maintenance</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Maintenance Costs"
                        placeholder="0"
                        v-model="maintenanceCosts"
                        :hasError="!!maintenanceCostsError"
                        :errorMessage="maintenanceCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Administration</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Administration Costs"
                        placeholder="0"
                        v-model="administrationCosts"
                        :hasError="!!administrationCostsError"
                        :errorMessage="administrationCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Marketing/Sales</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Marketing/Sales Costs"
                        placeholder="0"
                        v-model="marketingCosts"
                        :hasError="!!marketingCostsError"
                        :errorMessage="marketingCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Other</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Other Costs"
                        placeholder="0"
                        v-model="otherCosts"
                        :hasError="!!otherCostsError"
                        :errorMessage="otherCostsError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full max-lg:mb-20">
                    <div class="lg:text-base max-lg:text-sm w-1/2">Total Operating Costs</div>
                    <CommonInputsVariant 
                        class="w-full"
                        type="number"
                        label="Total Operating Costs"
                        placeholder="0"
                        v-model="totalOperatingCosts"
                        :hasError="!!totalOperatingCostsError"
                        :errorMessage="totalOperatingCostsError"
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
import { operatingCostsAnnual } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useDataStore } from '~/stores/dataStore';
import { useForm, useField } from "vee-validate"
import { currencies } from "/assets/data/data"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const dataStore = useDataStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: operatingCostsAnnual,
})

// Define fields with useField (converted to camelCase)
const { value: currency, errorMessage: currencyError } = useField('currency')
const { value: rawMaterialCosts, errorMessage: rawMaterialCostsError } = useField('rawMaterialCosts')
const { value: laborCosts, errorMessage: laborCostsError } = useField('laborCosts')
const { value: utilitiesCosts, errorMessage: utilitiesCostsError } = useField('utilitiesCosts')
const { value: maintenanceCosts, errorMessage: maintenanceCostsError } = useField('maintenanceCosts')
const { value: administrationCosts, errorMessage: administrationCostsError } = useField('administrationCosts')
const { value: marketingCosts, errorMessage: marketingCostsError } = useField('marketingCosts')
const { value: otherCosts, errorMessage: otherCostsError } = useField('otherCosts')
const { value: totalOperatingCosts, errorMessage: totalOperatingCostsError } = useField('totalOperatingCosts')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
        await stepStore.fetchStep('technical', projectId.value)

        if (userId.value) {
            await dataStore.loadSteps(userId.value, projectId.value)
        }

      if (stepStore.state?.operatingCosts) {
        setValues({
            currency: dataStore.preferences.currency || "",
            // currency: stepStore.state?.operatingCosts.currency || "",
            rawMaterialCosts: stepStore.state?.operatingCosts.rawMaterialCosts || "",
            laborCosts: stepStore.state?.operatingCosts.laborCosts || "",
            utilitiesCosts: stepStore.state?.operatingCosts.utilitiesCosts || "",
            maintenanceCosts: stepStore.state?.operatingCosts.maintenanceCosts || "",
            administrationCosts: stepStore.state?.operatingCosts.administrationCosts || "",
            marketingCosts: stepStore.state?.operatingCosts.marketingCosts || "",
            otherCosts: stepStore.state?.operatingCosts.otherCosts || "",
            totalOperatingCosts: stepStore.state?.operatingCosts.totalOperatingCosts || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching operating costs:', error)
  }
})

const submitOperatingCost = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'technical',
      'operatingCosts',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Operating costs saved successfully!')
    navigateTo('raw-materials-and-supply-chain')
  } catch (error) {
    $notyf.error('Failed to save operating costs')
  }
})
</script>