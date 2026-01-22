<template>
    <div>
        <CommonPageHeading title="Technical Complexity" description="Special technical complexities and required expertise" />

        <form @submit.prevent="submittechnicalComplexity" class="space-y-4">
             <CommonTextArea class="mt-6"
             label="Special technical complexities"
             :rows="5"
             placeholder="Provide your Special technical complexities"
             v-model="specialTechComplexitiesDesc"
                :hasError="specialTechComplexitiesDescError"
                :errorMessage="errors.specialTechComplexitiesDesc"
                />

        <CommonPageHeading title="" description="Key equipment suppliers" />
             <CommonTextArea class="mt-4"
             label="Key equipment suppliers"
             :rows="5"
             placeholder="Provide your Key equipment suppliers"
             v-model="keyEquipementDesc"
                :hasError="keyEquipementDescError"
                :errorMessage="errors.keyEquipementDesc"
                />

                <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
                  <button 
                    type="submit" :disabled="hasValidationErrors"
                    class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-1"
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
import { technicalSchema } from '~/validation/formValidationSchema'
import { useProfileStore } from '@/stores/profileStore'
// import { useTechnicalStore } from '@/stores/technicalStore'
import { useStepStore } from '@/stores/useStepStore'

import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
// const technicalStore = useTechnicalStore()
const stepStore = useStepStore();

const profileStore = useProfileStore()
const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: technicalSchema,
})

const { value: specialTechComplexitiesDesc, errorMessage: specialTechComplexitiesDescError } = useField('specialTechComplexitiesDesc');
const { value: keyEquipementDesc, errorMessage: keyEquipementDescError } = useField('keyEquipementDesc');

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth()
  
  try {
    // Get projectId from profile store
    // await profileStore.getProjectId(userId.value)
    
    if (projectId.value) {
      await stepStore.fetchStep('technical', projectId.value)

      if (stepStore.state?.technicalComplexity) {
        setValues({
          specialTechComplexitiesDesc: stepStore.state?.technicalComplexity.specialTechComplexitiesDesc || "",
          keyEquipementDesc: stepStore.state?.technicalComplexity.keyEquipementDesc || "",
        });
      }
    }
  } catch (error) {
  }
})

const submittechnicalComplexity = handleSubmit(async (values) => {
  
  // console.log('Values', values);
  await checkAuth()
  // await profileStore.getProjectId(userId.value)

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    await stepStore.saveSection(
      'technical',
      'technicalComplexity',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Data saved successfully!')
    navigateTo('human-resources')
  } catch (error) {
    $notyf.error('Failed to save data')
  }
})
</script>