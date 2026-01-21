<template>
  <div>
    <div class="lg:max-w-[920px] m-1">
      <CommonPageHeading
        title="Financial Projections"
        description="Profitability indicators (5-year projection): "
      />

      <div class="py-3 lg:w-1/2 max-lg:w-full">
        <form @submit.prevent="submitFinancialProjections" class="space-y-3">
          
          <!-- Year 1 -->
          <div class="grow text-left text-base font-bold">Year 1</div>
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Revenue"
                placeholder="0"
                v-model="year1Revenue"
                :hasError="!!year1RevenueError"
                :errorMessage="year1RevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Operating Profit
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Operating Profit"
                placeholder="0"
                v-model="year1OperatingProfit"
                :hasError="!!year1OperatingProfitError"
                :errorMessage="year1OperatingProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Net Profit"
                placeholder="0"
                v-model="year1NetProfit"
                :hasError="!!year1NetProfitError"
                :errorMessage="year1NetProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROI percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROI percentage (%)"
                placeholder="0"
                v-model="year1RoiPercentage"
                :hasError="!!year1RoiPercentageError"
                :errorMessage="year1RoiPercentageError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROE percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROE percentage (%)"
                placeholder="0"
                v-model="year1RoePercentage"
                :hasError="!!year1RoePercentageError"
                :errorMessage="year1RoePercentageError"
              />
            </div>
          </div>

          <div v-if="!year1RevenueError && year1Revenue && !year1OperatingProfitError && year1OperatingProfit && !year1NetProfitError && year1NetProfit && !year1RoiPercentageError && year1RoiPercentage && !year1RoePercentageError && year1RoePercentage"
          class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Year 1 Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 

          <!-- Year 2 -->
          <div class="grow text-left text-base font-bold mt-20">Year 2</div>
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Revenue"
                placeholder="0"
                v-model="year2Revenue"
                :hasError="!!year2RevenueError"
                :errorMessage="year2RevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Operating Profit
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Operating Profit"
                placeholder="0"
                v-model="year2OperatingProfit"
                :hasError="!!year2OperatingProfitError"
                :errorMessage="year2OperatingProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Net Profit"
                placeholder="0"
                v-model="year2NetProfit"
                :hasError="!!year2NetProfitError"
                :errorMessage="year2NetProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROI percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROI percentage (%)"
                placeholder="0"
                v-model="year2RoiPercentage"
                :hasError="!!year2RoiPercentageError"
                :errorMessage="year2RoiPercentageError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROE percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROE percentage (%)"
                placeholder="0"
                v-model="year2RoePercentage"
                :hasError="!!year2RoePercentageError"
                :errorMessage="year2RoePercentageError"
              />
            </div>
          </div>

          <div v-if="!year2RevenueError && year2Revenue && !year2OperatingProfitError && year2OperatingProfit && !year2NetProfitError && year2NetProfit && !year2RoiPercentageError && year2RoiPercentage && !year2RoePercentageError && year2RoePercentage"
          class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Year 2 Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 

          <!-- Year 3 -->
          <div class="grow text-left text-base font-bold mt-20">Year 3</div>
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Revenue"
                placeholder="0"
                v-model="year3Revenue"
                :hasError="!!year3RevenueError"
                :errorMessage="year3RevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Operating Profit
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Operating Profit"
                placeholder="0"
                v-model="year3OperatingProfit"
                :hasError="!!year3OperatingProfitError"
                :errorMessage="year3OperatingProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Net Profit"
                placeholder="0"
                v-model="year3NetProfit"
                :hasError="!!year3NetProfitError"
                :errorMessage="year3NetProfitError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROI percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROI percentage (%)"
                placeholder="0"
                v-model="year3RoiPercentage"
                :hasError="!!year3RoiPercentageError"
                :errorMessage="year3RoiPercentageError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                ROE percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="ROE percentage (%)"
                placeholder="0"
                v-model="year3RoePercentage"
                :hasError="!!year3RoePercentageError"
                :errorMessage="year3RoePercentageError"
              />
            </div>
          </div>

          <div  v-if="!year3RevenueError && year3Revenue && !year3OperatingProfitError && year3OperatingProfit && !year3NetProfitError && year3NetProfit && !year3RoiPercentageError && year3RoiPercentage && !year3RoePercentageError && year3RoePercentage"
          class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Year 3 Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 

          <!-- Years 4 & 5 (optional) -->
          <!-- <div class="grow text-left text-base font-bold mt-8">Year 4 (Optional)</div>
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Revenue"
                placeholder="0"
                v-model="year4Revenue"
                :hasError="!!year4RevenueError"
                :errorMessage="year4RevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Net Profit"
                placeholder="0"
                v-model="year4NetProfit"
                :hasError="!!year4NetProfitError"
                :errorMessage="year4NetProfitError"
              />
            </div>
          </div>

          <div class="grow text-left text-base font-bold mt-8">Year 5 (Optional)</div>
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Revenue"
                placeholder="0"
                v-model="year5Revenue"
                :hasError="!!year5RevenueError"
                :errorMessage="year5RevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Net Profit"
                placeholder="0"
                v-model="year5NetProfit"
                :hasError="!!year5NetProfitError"
                :errorMessage="year5NetProfitError"
              />
            </div>
          </div> -->

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
  </div>
</template>

<script setup>
import { financialProjections } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: financialProjections,
})

// Year 1 Fields
const { value: year1Revenue, errorMessage: year1RevenueError } = useField('year1Revenue')
const { value: year1OperatingProfit, errorMessage: year1OperatingProfitError } = useField('year1OperatingProfit')
const { value: year1NetProfit, errorMessage: year1NetProfitError } = useField('year1NetProfit')
const { value: year1RoiPercentage, errorMessage: year1RoiPercentageError } = useField('year1RoiPercentage')
const { value: year1RoePercentage, errorMessage: year1RoePercentageError } = useField('year1RoePercentage')

// Year 2 Fields
const { value: year2Revenue, errorMessage: year2RevenueError } = useField('year2Revenue')
const { value: year2OperatingProfit, errorMessage: year2OperatingProfitError } = useField('year2OperatingProfit')
const { value: year2NetProfit, errorMessage: year2NetProfitError } = useField('year2NetProfit')
const { value: year2RoiPercentage, errorMessage: year2RoiPercentageError } = useField('year2RoiPercentage')
const { value: year2RoePercentage, errorMessage: year2RoePercentageError } = useField('year2RoePercentage')

// Year 3 Fields
const { value: year3Revenue, errorMessage: year3RevenueError } = useField('year3Revenue')
const { value: year3OperatingProfit, errorMessage: year3OperatingProfitError } = useField('year3OperatingProfit')
const { value: year3NetProfit, errorMessage: year3NetProfitError } = useField('year3NetProfit')
const { value: year3RoiPercentage, errorMessage: year3RoiPercentageError } = useField('year3RoiPercentage')
const { value: year3RoePercentage, errorMessage: year3RoePercentageError } = useField('year3RoePercentage')

// Year 4 Fields (Optional)
// const { value: year4Revenue, errorMessage: year4RevenueError } = useField('year4Revenue')
// const { value: year4NetProfit, errorMessage: year4NetProfitError } = useField('year4NetProfit')

// // Year 5 Fields (Optional)
// const { value: year5Revenue, errorMessage: year5RevenueError } = useField('year5Revenue')
// const { value: year5NetProfit, errorMessage: year5NetProfitError } = useField('year5NetProfit')

const hasValidationErrors = computed(() => {
  console.log('errors', errors.value);
  
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('investment', projectId.value)

      if (stepStore.state?.financialProjections) {
        setValues({
          // Year 1
          year1Revenue: stepStore.state?.financialProjections.year1Revenue || "",
          year1OperatingProfit: stepStore.state?.financialProjections.year1OperatingProfit || "",
          year1NetProfit: stepStore.state?.financialProjections.year1NetProfit || "",
          year1RoiPercentage: stepStore.state?.financialProjections.year1RoiPercentage || "",
          year1RoePercentage: stepStore.state?.financialProjections.year1RoePercentage || "",
          
          // Year 2
          year2Revenue: stepStore.state?.financialProjections.year2Revenue || "",
          year2OperatingProfit: stepStore.state?.financialProjections.year2OperatingProfit || "",
          year2NetProfit: stepStore.state?.financialProjections.year2NetProfit || "",
          year2RoiPercentage: stepStore.state?.financialProjections.year2RoiPercentage || "",
          year2RoePercentage: stepStore.state?.financialProjections.year2RoePercentage || "",
          
          // Year 3
          year3Revenue: stepStore.state?.financialProjections.year3Revenue || "",
          year3OperatingProfit: stepStore.state?.financialProjections.year3OperatingProfit || "",
          year3NetProfit: stepStore.state?.financialProjections.year3NetProfit || "",
          year3RoiPercentage: stepStore.state?.financialProjections.year3RoiPercentage || "",
          year3RoePercentage: stepStore.state?.financialProjections.year3RoePercentage || "",
          
          // Year 4 (Optional)
          // year4Revenue: stepStore.state?.financialProjections.year4Revenue || "",
          // year4NetProfit: stepStore.state?.financialProjections.year4NetProfit || "",
          
          // // Year 5 (Optional)
          // year5Revenue: stepStore.state?.financialProjections.year5Revenue || "",
          // year5NetProfit: stepStore.state?.financialProjections.year5NetProfit || "",
        })
      }
    }
  } catch (error) {
    console.error('Error fetching financial projections:', error)
  }
})

const submitFinancialProjections = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'investment',
      'financialProjections',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Financial projections saved successfully!')
    navigateTo('critical-success-factors')
  } catch (error) {
    $notyf.error('Failed to save financial projections')
  }
})
</script>