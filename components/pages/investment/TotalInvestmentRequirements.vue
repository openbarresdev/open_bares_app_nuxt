<template>
    <div class="lg:max-w- m-1">
        <CommonPageHeading title="Total Investment Requirements" description="Capital expenditure breakdown" />
        
        <form @submit.prevent="submitTotalInvestment" class="space-y-3 my-3">
            <div class="space-y-4 w-2/3 max-lg:w-full max-lg:mb-20">
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Currency: </div>
                    <CommonSelectVariant 
                        class="w-1/3 max-lg:w-full"
                        label="Currency Eg. $ "
                        :options="currencies"
                        v-model="currency"
                        :hasError="!!currencyError"
                        :errorMessage="currencyError"
                    />
                </div>

                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Land and site preparation: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Land & site preparation"
                        placeholder="0,00"
                        v-model="landSitePreparation"
                        :hasError="!!landSitePreparationError"
                        :errorMessage="landSitePreparationError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Buildings and infrastructure: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Buildings & infrastructure"
                        placeholder="0,00"
                        v-model="buildingsInfrastructure"
                        :hasError="!!buildingsInfrastructureError"
                        :errorMessage="buildingsInfrastructureError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Machinery and equipment: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Machinery & equipment"
                        placeholder="0,00"
                        v-model="machineryEquipment"
                        :hasError="!!machineryEquipmentError"
                        :errorMessage="machineryEquipmentError"
                    />
                </div>

                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Pre-operating expenses: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Pre-operating expenses"
                        placeholder="0,00"
                        v-model="preOperatingExpenses"
                        :hasError="!!preOperatingExpensesError"
                        :errorMessage="preOperatingExpensesError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Working capital: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Working capital"
                        placeholder="0,00"
                        v-model="workingCapital"
                        :hasError="!!workingCapitalError"
                        :errorMessage="workingCapitalError"
                    />
                </div>
                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Contingency (5-10%): </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Contingency"
                        placeholder="0,00"
                        v-model="contingency"
                        :hasError="!!contingencyError"
                        :errorMessage="contingencyError"
                    />
                </div>

                <div class="inline-flex items-center gap-2 w-full">
                    <div class="lg:text-base max-lg:text-sm w-2/3 max-lg:min-w-32">Total Project Cost: </div>
                    <CommonInputsVariant 
                        class="w-1/3 max-lg:w-full"
                        type="text"
                        label="Total Project Cost"
                        placeholder="0,00"
                        v-model="totalProjectCost"
                        :hasError="!!totalProjectCostError"
                        :errorMessage="totalProjectCostError"
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
import { totalInvestmentRequirements } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"
import { currencies } from "/assets/data/data"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: totalInvestmentRequirements,
})

// Define fields with useField (converted to camelCase)
const { value: currency, errorMessage: currencyError } = useField('currency')
const { value: landSitePreparation, errorMessage: landSitePreparationError } = useField('landSitePreparation')
const { value: buildingsInfrastructure, errorMessage: buildingsInfrastructureError } = useField('buildingsInfrastructure')
const { value: machineryEquipment, errorMessage: machineryEquipmentError } = useField('machineryEquipment')
const { value: preOperatingExpenses, errorMessage: preOperatingExpensesError } = useField('preOperatingExpenses')
const { value: workingCapital, errorMessage: workingCapitalError } = useField('workingCapital')
const { value: contingency, errorMessage: contingencyError } = useField('contingency')
const { value: totalProjectCost, errorMessage: totalProjectCostError } = useField('totalProjectCost')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('investment', projectId.value)

      if (stepStore.state?.totalInvestment) {
        setValues({
            currency: stepStore.state?.totalInvestment.currency || "",
            landSitePreparation: stepStore.state?.totalInvestment.landSitePreparation || "",
            buildingsInfrastructure: stepStore.state?.totalInvestment.buildingsInfrastructure || "",
            machineryEquipment: stepStore.state?.totalInvestment.machineryEquipment || "",
            preOperatingExpenses: stepStore.state?.totalInvestment.preOperatingExpenses || "",
            workingCapital: stepStore.state?.totalInvestment.workingCapital || "",
            contingency: stepStore.state?.totalInvestment.contingency || "",
            totalProjectCost: stepStore.state?.totalInvestment.totalProjectCost || ""
        })
      }
    }
  } catch (error) {
    console.error('Error fetching total investment requirements:', error)
  }
})

const submitTotalInvestment = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'investment',
      'totalInvestment',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Total investment requirements saved successfully!')
    navigateTo('financing-structure')
  } catch (error) {
    $notyf.error('Failed to save total investment requirements')
  }
})
</script>