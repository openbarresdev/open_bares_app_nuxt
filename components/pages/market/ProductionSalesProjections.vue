<template>
  <div>
    <CommonPageHeading ref="accordionRef" 
      @closed="onAccordionClosed"
      title="Production & Sales Projections"
      description="Projected production volumes and sales objectives (5-year projection)"
    />

    <div class="py-3 lg:w-1/2 max-lg:w-full">
        <form class="space-y-3 my-8" @submit.prevent="submitProductionSales">
          
          <div class="space-y-6 px-1.5 w-full">

            <div class="grow text-left text-base font-bold">Year 1</div>
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

          <div class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 

          <div class="space-y-6 px-1.5 w-full">
            <div class="grow text-left text-base font-bold">Year 2</div>
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
                :hasError="!!yearTwoProductionVolumeError"
                :errorMessage="yearTwoProductionVolumeError"
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
                :hasError="!!yearTwoUnitPriceError"
                :errorMessage="yearTwoUnitPriceError"
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
                :hasError="!!yearTwoTotalRevenueError"
                :errorMessage="yearTwoTotalRevenueError"
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
                :hasError="!!yearTwoNetProfitError"
                :errorMessage="yearTwoNetProfitError"
              />
            </div>
          </div>

          <div class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 
          
          <div class="space-y-6 px-1.5 w-full">
            <div class="grow text-left text-base font-bold">Year 3</div>
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
                :hasError="!!yearThreeProductionVolumeError"
                :errorMessage="yearThreeProductionVolumeError"
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
                :hasError="!!yearThreeUnitPriceError"
                :errorMessage="yearThreeUnitPriceError"
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
                :hasError="!!yearThreeTotalRevenueError"
                :errorMessage="yearThreeTotalRevenueError"
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
                :hasError="!!yearThreeNetProfitError"
                :errorMessage="yearThreeNetProfitError"
              />
            </div>
          </div>

          <div class="my-8 px-4 py-1 text-green-500 font-semibold bg-green-100 w-full rounded-md">
            <div class="flex items-center justify-between">
              <span>Completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"/></svg>
            </div>
          </div> 

          <button 
            type="submit"
            class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
          > Save & Continue
            <!-- <span v-if="marketStore.isLoading" class="loading loading-spinner"></span>
            {{ marketStore.isLoading ? 'Saving...' : 'Save & Continue' }} -->
            <span class="icon-[tabler--chevron-right] size-5"></span>
          </button>
         
        </form>
    </div>
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
    // Get projectId from profile store
    await profileStore.getProjectId(userId.value)
    
    if (profileStore.projectId) {
      await marketStore.fetchMarketData(profileStore.projectId)
      
      // if (marketStore.marketData?.productionAndSales?.yearOne) {
      if (marketStore.marketData?.productionAndSales) {
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
    await marketStore.saveMarketData(profileStore.projectId, {productionAndSales: productionData})
    
    $notyf.success('Production data saved successfully!')
    navigateTo('target-market')
  } catch (error) {
    $notyf.error('Failed to save production data')
  }
})
</script>
