<template>
    <div>
        <CommonPageHeading title="Market Environment" description="Current sources of supply for similar products/services" />

        <form @submit.prevent="submitMarketEnvironment" class="space-y-4">
             <CommonTextArea class="mt-4"
                label="Current sources of supply"
                :rows="5"
                placeholder="Provide your Current sources of supply"
                v-model = "sourceOfSupply"
                :hasError="!!sourceOfSupplyError"
                :errorMessage="sourceOfSupplyError"
                />

        <CommonPageHeading title="" description="Main competitors and competitive advantages" />
             <CommonTextArea class="mt-4"
                label="Main competitors"
                :rows="5"
                placeholder="Provide your main competitors"
                v-model = "mainCompetitors"
                :hasError="!!mainCompetitorsError"
                :errorMessage="mainCompetitorsError"
                />
        <CommonPageHeading title="" description="Potential for market substitution by alternative products" />

                 <CommonTextArea class="mt-4"
                label="market substitution"
                :rows="5"
                placeholder="Provide your market substitution"
                v-model = "marketSubstitution"
                :hasError="!!marketSubstitutionError"
                :errorMessage="marketSubstitutionError"
                />

        <CommonPageHeading title="" description="Tariff protection or import restrictions affecting your products" />
             <CommonTextArea class="mt-4"
                label="Tariff protection or import restrictions"
                :rows="5"
                placeholder="Provide your Tariff protection or import restrictions"
                v-model = "importRestrictions"
                :hasError="!!importRestrictionsError"
                :errorMessage="importRestrictionsError"
                />
        <CommonPageHeading title="" description="Critical factors determining market potential" />

                 <CommonTextArea class="mt-4 max-lg:mb-20"
                label="Critical factors"
                :rows="5"
                placeholder="Provide your Critical factors"
                v-model = "criticalFactors"
                :hasError="!!criticalFactorsError"
                :errorMessage="criticalFactorsError"
                />

        <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
          <button 
                  type="submit"
                  :disabled="hasValidationErrors || stepStore.isLoading"
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 mb-4"
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
import { marketEnvironmentSchema } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useProfileStore } from '@/stores/profileStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
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

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('market', projectId.value);

      if (stepStore.state?.marketEnvironment) {
        setValues({
          sourceOfSupply: stepStore.state.marketEnvironment.sourceOfSupply || "",
          mainCompetitors: stepStore.state.marketEnvironment.mainCompetitors || "",
          marketSubstitution: stepStore.state.marketEnvironment.marketSubstitution || "",
          importRestrictions: stepStore.state.marketEnvironment.importRestrictions || "",
          criticalFactors: stepStore.state.marketEnvironment.criticalFactors || "",
        });
      }
    }
  } catch (error) {
    console.error('Failed to load market environment data:', error)
  }
})

const submitMarketEnvironment = handleSubmit(async (values) => {
  await checkAuth()
  
  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'market',
      'marketEnvironment',
      values,
      userId.value,
      projectId.value,
    );
    
    $notyf.success('Market environment saved successfully!')
    nextPage.goToNextPage('technical/technical-complexity')
  } catch (error) {
    $notyf.error('Failed to save market environment')
  }
})
</script>