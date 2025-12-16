<template>
  <div>
    <CommonPageHeading
      title="Production & Sales Projections"
      description="Projected production volumes and sales objectives (5-year projection)"
    />

    <div class="py-3 lg:w-1/2 max-lg:w-full">
      <CommonAccordion title="Year 1" id="year1" :initial-open="true">
        <form class="space-y-3" @submit.prevent="submitProductionSales">
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Production Volume
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Production Volume"
                placeholder="0.00"
                v-model="yearOneProductionVolume"
                :hasError="!!yearOneProductionVolumeError"
                :errorMessage="yearOneProductionVolumeError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Unit Price</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Unit Price "
                placeholder="0.00"
                v-model="yearOneUnitPrice"
                :hasError="!!yearOneUnitPriceError"
                :errorMessage="yearOneUnitPriceError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Total Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Total Revenue "
                placeholder="0.00"
                v-model="yearOneTotalRevenue"
                :hasError="!!yearOneTotalRevenueError"
                :errorMessage="yearOneTotalRevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Market Share percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Market Share percentage (%)"
                placeholder="0.00"
                v-model="yearOneNetProfit"
                :hasError="!!yearOneNetProfitError"
                :errorMessage="yearOneNetProfitError"
              />
            </div>
          </div>

          <button 
            type="submit"
            class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
          > Save & Continue
            <!-- <span v-if="marketStore.isLoading" class="loading loading-spinner"></span>
            {{ marketStore.isLoading ? 'Saving...' : 'Save & Continue' }}
            <span class="icon-[tabler--chevron-right] size-5"></span> -->
          </button>
        </form>
      </CommonAccordion>

      <CommonAccordion title="Year 2" id="year2">
        <form action="" class="space-y-3">
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Production Volume
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Production Volume"
                placeholder="0"
                v-model="yearTwoProductionVolume"
                :hasError="!!yearTwoproductionVolumeError"
                :errorMessage="yearTwoproductionVolumeError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Unit Price</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Unit Price "
                placeholder="0.00"
                 v-model="yearTwoUnitPrice"
                :hasError="!!unitPriceError"
                :errorMessage="unitPriceError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Total Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Total Revenue "
                placeholder="0.00"
                v-model="yearTwoTotalRevenue"
                :hasError="!!totalRevenueError"
                :errorMessage="totalRevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Market Share percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Market Share percentage (%)"
                placeholder="0.00"
                 v-model="yearTwoNetProfit"
                :hasError="!!netProfitError"
                :errorMessage="netProfitError"
              />
            </div>
          </div>

          <div
            @click=""
            class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
          >
            Save <span class="icon-[tabler--chevron-right] size-5"></span>
          </div>
        </form>
      </CommonAccordion>

      <CommonAccordion title="Year 3" id="year3">
       <form action="" class="space-y-3">
          <div class="space-y-6 px-1.5 w-full">
            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Production Volume
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Production Volume"
                placeholder="0"
                 v-model="yearThreeProductionVolume"
                :hasError="!!productionVolumeError"
                :errorMessage="productionVolumeError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Unit Price</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Unit Price "
                placeholder="0.00"
                v-model="yearThreeUnitPrice"
                :hasError="!!unitPriceError"
                :errorMessage="unitPriceError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">Total Revenue</div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Total Revenue "
                placeholder="0.00"
                v-model="yearThreeTotalRevenue"
                :hasError="!!totalRevenueError"
                :errorMessage="totalRevenueError"
              />
            </div>

            <div class="inline-flex items-center gap-2 w-full">
              <div class="lg:text-base max-lg:text-sm w-1/2">
                Market Share percentage (%)
              </div>
              <CommonInputsVariant
                class="w-full"
                type="number"
                label="Market Share percentage (%)"
                placeholder="0.00"
                 v-model="yearThreeNetProfit"
                :hasError="!!netProfitError"
                :errorMessage="netProfitError"
              />
            </div>
          </div>

          <div
            @click=""
            class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
          >
            Save <span class="icon-[tabler--chevron-right] size-5"></span>
          </div>
        </form>
      </CommonAccordion>
    </div>

    <!-- <div @click="navigateTo('target-market')"
      class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3"
    >
      Continue <span class="icon-[tabler--chevron-right] size-5"></span>
    </div> -->

  </div>
</template>

<script setup>
import { productionAndSalesSchema } from '~/validation/formValidationSchema'
import { useMarketStore } from '@/stores/marketStore'
import { useProfileStore } from '@/stores/profileStore'
import { useForm, useField } from "vee-validate"

const { userId, checkAuth } = useAuth()
const marketStore = useMarketStore()
const profileStore = useProfileStore()
const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: productionAndSalesSchema,
})

// Year One fields
const { value: yearOneProductionVolume, errorMessage: yearOneProductionVolumeError } = useField('yearOneProductionVolume')
const { value: yearOneUnitPrice, errorMessage: yearOneUnitPriceError } = useField('yearOneUnitPrice')
const { value: yearOneTotalRevenue, errorMessage: yearOneTotalRevenueError } = useField('yearOneTotalRevenue')
const { value: yearOneNetProfit, errorMessage: yearOneNetProfitError } = useField('yearOneNetProfit')

const { value: yearTwoProductionVolume, errorMessage: yearTwoProductionVolumeError } = useField('yearTwoProductionVolume')
const { value: yearTwoUnitPrice, errorMessage: yearTwoUnitPriceError } = useField('yearTwoUnitPrice')
const { value: yearTwoTotalRevenue, errorMessage: yearTwoTotalRevenueError } = useField('yearTwoTotalRevenue')
const { value: yearTwoNetProfit, errorMessage: yearTwoNetProfitError } = useField('yearTwoNetProfit')

const { value: yearThreeProductionVolume, errorMessage: yearThreeProductionVolumeError } = useField('yearThreeProductionVolume')
const { value: yearThreeUnitPrice, errorMessage: yearThreeUnitPriceError } = useField('yearThreeUnitPrice')
const { value: yearThreeTotalRevenue, errorMessage: yearThreeTotalRevenueError } = useField('yearThreeTotalRevenue')
const { value: yearThreeNetProfit, errorMessage: yearThreeNetProfitError } = useField('yearThreeNetProfit')


onMounted(async () => {
  await checkAuth()
  console.log('marketStore marketData', marketStore.marketData.productionAndSales);
  
  try {
    await profileStore.getProjectId(userId.value)
    
    if (profileStore.projectId) {
      await marketStore.fetchMarketData(profileStore.projectId)
      
      if (marketStore.marketData?.productionAndSales?.yearOne) {
        setValues({
  yearOneProductionVolume: marketStore.marketData.productionAndSales.yearOne.productionVolume || "",
  yearOneUnitPrice: marketStore.marketData.productionAndSales.yearOne.unitPrice || "",
  yearOneTotalRevenue: marketStore.marketData.productionAndSales.yearOne.totalRevenue || "",
  yearOneNetProfit: marketStore.marketData.productionAndSales.yearOne.netProfit || "",

  yearTwoProductionVolume: marketStore.marketData.productionAndSales.yearTwo.productionVolume || "",
  yearTwoUnitPrice: marketStore.marketData.productionAndSales.yearTwo.unitPrice || "",
  yearTwoTotalRevenue: marketStore.marketData.productionAndSales.yearTwo.totalRevenue || "",
  yearTwoNetProfit: marketStore.marketData.productionAndSales.yearTwo.netProfit || "",

  yearThreeProductionVolume: marketStore.marketData.productionAndSales.yearThree.productionVolume || "",
  yearThreeUnitPrice: marketStore.marketData.productionAndSales.yearThree.unitPrice || "",
  yearThreeTotalRevenue: marketStore.marketData.productionAndSales.yearThree.totalRevenue || "",
  yearThreeNetProfit: marketStore.marketData.productionAndSales.yearThree.netProfit || "",
});

      }
    }
  } catch (error) {
    console.error('Failed to load market data:', error)
  }
})

const submitProductionSales = handleSubmit(async (values) => {
  
  console.log('Values', values);
  
  await profileStore.getProjectId(userId.value)
  
  try {
    if (!profileStore.projectId) {
      $notyf.error('No project found')
      return
    }

    const productionData = {
      yearOne: {
        productionVolume: values.yearOneProductionVolume,
        unitPrice: values.yearOneUnitPrice,
        totalRevenue: values.yearOneTotalRevenue,
        netProfit: values.yearOneNetProfit,
      },
      yearTwo: {
        productionVolume: values.yearTwoProductionVolume,
        unitPrice: values.yearTwoUnitPrice,
        totalRevenue: values.yearTwoTotalRevenue,
        netProfit: values.yearTwoNetProfit,
      },
      yearThree: {
        productionVolume: values.yearThreeProductionVolume,
        unitPrice: values.yearThreeUnitPrice,
        totalRevenue: values.yearThreeTotalRevenue,
        netProfit: values.yearThreeNetProfit,
      },
    }
    
    await marketStore.saveMarketData(profileStore.projectId, {
      productionAndSales: productionData
    })
    
    $notyf.success('Production data saved successfully!')
    // navigateTo('/market/target-market')
  } catch (error) {
    $notyf.error('Failed to save production data')
  }
})
</script>
