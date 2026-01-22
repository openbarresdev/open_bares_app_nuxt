<template>
    <div>
        <CommonPageHeading title="Market Environment" description="Current sources of supply for similar products/services" />

        <form @submit.prevent="submitMarketEnvironment" class="space-y-4">
             <CommonTextArea class="mt-4"
                label="Current sources of supply"
                :rows="5"
                placeholder="Provide your Current sources of supply"
                v-model = "sourceOfSupply"
                :hasError="sourceOfSupplyError"
                :errorMessage="errors.sourceOfSupply"
                />

        <CommonPageHeading title="" description="Main competitors and competitive advantages" />
             <CommonTextArea class="mt-4"
                label="Main competitors"
                :rows="5"
                placeholder="Provide your main competitors"
                v-model = "mainCompetitors"
                :hasError="mainCompetitorsError"
                :errorMessage="errors.mainCompetitors"
                />
        <CommonPageHeading title="" description="Potential for market substitution by alternative products" />

                 <CommonTextArea class="mt-4"
                label="market substitution"
                :rows="5"
                placeholder="Provide your market substitution"
                v-model = "marketSubstitution"
                :hasError="marketSubstitutionError"
                :errorMessage="errors.marketSubstitution"
                />

        <CommonPageHeading title="" description="Tariff protection or import restrictions affecting your products" />
             <CommonTextArea class="mt-4"
                label="Tariff protection or import restrictions"
                :rows="5"
                placeholder="Provide your Tariff protection or import restrictions"
                v-model = "importRestrictions"
                :hasError="importRestrictionsError"
                :errorMessage="errors.importRestrictions"
                />
        <CommonPageHeading title="" description="Critical factors determining market potential" />

                 <CommonTextArea class="mt-4 max-lg:mb-20"
                label="Critical factors"
                :rows="5"
                placeholder="Provide your Critical factors"
                v-model = "criticalFactors"
                :hasError="criticalFactorsError"
                :errorMessage="errors.criticalFactors"
                />

        <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
          <button 
                  type="submit"
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 mb-4"
                  > Save & Continue
                  <!-- <span v-if="marketStore.isLoading" class="loading loading-spinner"></span>
                  {{ marketStore.isLoading ? 'Saving...' : 'Save & Continue' }} -->
                  <span class="icon-[tabler--chevron-right] size-5"></span>
          </button>
          <!-- <div @click="nextPage.goToNextPage('technical/technical-complexity')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & continue <span class="icon-[tabler--chevron-right] size-5"></span></div> -->
        </div>

        </form>
    </div>
</template>

<script setup>
import { marketEnvironmentSchema } from '~/validation/formValidationSchema'
import { useMarketStore } from '@/stores/marketStore'
import { useProfileStore } from '@/stores/profileStore'
import { useForm, useField } from "vee-validate"

const { userId, checkAuth } = useAuth()
const marketStore = useMarketStore()
const profileStore = useProfileStore()
const nextPage = usePageNav();
const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: marketEnvironmentSchema,
})

const { value: sourceOfSupply, errorMessage: sourceOfSupplyError } = useField('sourceOfSupply');
const { value: mainCompetitors, errorMessage: mainCompetitorsError } = useField('mainCompetitors');
const { value: marketSubstitution, errorMessage: marketSubstitutionError } = useField('marketSubstitution');
const { value: importRestrictions, errorMessage: importRestrictionsError } = useField('importRestrictions');
const { value: criticalFactors, errorMessage: criticalFactorsError } = useField('criticalFactors');


onMounted(async () => {
  await checkAuth()
  
  try {
    // Get projectId from profile store
    await profileStore.getProjectId(userId.value)
    
    if (profileStore.projectId) {
      await marketStore.fetchMarketData(profileStore.projectId)
      
      if (marketStore.marketData?.marketEnvironment) {
        setValues({
          sourceOfSupply: marketStore.marketData.marketEnvironment.sourceOfSupply || "",
          mainCompetitors: marketStore.marketData.marketEnvironment.mainCompetitors || "",
          marketSubstitution: marketStore.marketData.marketEnvironment.marketSubstitution || "",
          importRestrictions: marketStore.marketData.marketEnvironment.importRestrictions || "",
          criticalFactors: marketStore.marketData.marketEnvironment.criticalFactors || "",
        });
      }
    }
  } catch (error) {
  }
})

const submitMarketEnvironment = handleSubmit(async (values) => {
  
  console.log('Values', values);
  
  await profileStore.getProjectId(userId.value)
  
  try {
    if (!profileStore.projectId) {
      $notyf.error('No project found')
      return
    }
    await marketStore.saveMarketData(userId.value, profileStore.projectId, 'marketEnvironment', {marketEnvironment : values})
    
    $notyf.success('Production data saved successfully!')
    nextPage.goToNextPage('technical/technical-complexity')
  } catch (error) {
    $notyf.error('Failed to save production data')
  }
})
</script>