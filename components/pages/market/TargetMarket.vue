<template>
    <div>
        <CommonPageHeading title="Target Market" description="Primary target customers/users" />

         <form @submit.prevent="submitTargetMarket" class="space-y-6">
             <CommonTextArea class="mt-6"
                label="Primary customers/users"
                :rows="5"
                placeholder="Provide your Primary customers/users"
                v-model = "primaryCustomers"
                :hasError="primaryCustomersError"
                :errorMessage="errors.primaryCustomers"
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
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
              > Save & Continue
                  <!-- <span v-if="marketStore.isLoading" class="loading loading-spinner"></span>
                  {{ marketStore.isLoading ? 'Saving...' : 'Save & Continue' }} -->
                  <span class="icon-[tabler--chevron-right] size-5"></span>
              </button>
            </div>

        </form>
    </div>
</template>

<script setup>
import { channels as distributionChannelsOptions } from "/assets/data/data";
import { targetMarketSchema } from '~/validation/formValidationSchema'
import { useMarketStore } from '@/stores/marketStore'
import { useProfileStore } from '@/stores/profileStore'
import { useForm, useField } from "vee-validate"

const { userId, checkAuth } = useAuth()
const marketStore = useMarketStore()
const profileStore = useProfileStore()
const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: targetMarketSchema,
})

const { value: primaryCustomers, errorMessage: primaryCustomersError } = useField('primaryCustomers');
const { value: distributionChannels, errorMessage: distributionChannelsError } = useField('distributionChannels');


onMounted(async () => {
  await checkAuth()
  
  try {
    // Get projectId from profile store
    await profileStore.getProjectId(userId.value)
    
    if (profileStore.projectId) {
      await marketStore.fetchMarketData(profileStore.projectId)
      
      if (marketStore.marketData?.targetMarket) {
        setValues({
          primaryCustomers: marketStore.marketData.targetMarket.primaryCustomers || "",
          distributionChannels: marketStore.marketData.targetMarket.distributionChannels || "",
        });
      }
    }
  } catch (error) {
  }
})

const submitTargetMarket = handleSubmit(async (values) => {
  
//   console.log('Values', values);
  
  await profileStore.getProjectId(userId.value)
  
  try {
    if (!profileStore.projectId) {
      $notyf.error('No project found')
      return
    }
    await marketStore.saveMarketData(profileStore.projectId, 'targetMarket', {targetMarket : values})
    
    $notyf.success('Production data saved successfully!')
    navigateTo('market-environment')
  } catch (error) {
    $notyf.error('Failed to save production data')
  }
})

</script>