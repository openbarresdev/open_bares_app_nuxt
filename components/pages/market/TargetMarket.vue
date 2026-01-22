<template>
    <div>
        <CommonPageHeading title="Target Market" description="Primary target customers/users" />

         <form @submit.prevent="submitTargetMarket" class="space-y-6">
             <CommonTextArea class="mt-6"
                label="Primary customers/users"
                :rows="5"
                placeholder="Provide your Primary customers/users"
                v-model = "primaryCustomers"
                :hasError="!!primaryCustomersError"
                :errorMessage="primaryCustomersError"
                />

            <CommonPageHeading title="" description="Distribution channels to be used" />
                <CommonRadiaButton
                    v-model="distributionChannels"
                    :options="distributionChannelsOptions"
                    :hasError="!!distributionChannelsError"
                    :errorMessage="distributionChannelsError"
                    />

            <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
              <button 
                  type="submit"
                  :disabled="hasValidationErrors || stepStore.isLoading"
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
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
import { channels as distributionChannelsOptions } from "/assets/data/data";
import { targetMarketSchema } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: targetMarketSchema,
})

const { value: primaryCustomers, errorMessage: primaryCustomersError } = useField('primaryCustomers');
const { value: distributionChannels, errorMessage: distributionChannelsError } = useField('distributionChannels');

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('market', projectId.value);

      if (stepStore.state?.targetMarket) {
        setValues({
          primaryCustomers: stepStore.state.targetMarket.primaryCustomers || "",
          distributionChannels: stepStore.state.targetMarket.distributionChannels || "",
        });
      }
    }
  } catch (error) {
    console.error('Failed to load target market data:', error)
  }
})

const submitTargetMarket = handleSubmit(async (values) => {
  await checkAuth()
  
  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'market',
      'targetMarket',
      values,
      userId.value,
      projectId.value,
    );
    
    $notyf.success('Target market data saved successfully!')
    navigateTo('market-environment')
  } catch (error) {
    $notyf.error('Failed to save target market data')
  }
})
</script>