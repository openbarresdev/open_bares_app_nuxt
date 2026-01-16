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

        <!-- <div @click="navigateTo('human-resources')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div> -->
            <button 
                type="submit"
                class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
            > Save & Continue
                <!-- <span v-if="stepSotre.isLoading" class="loading loading-spinner"></span>
                {{ stepSotre.isLoading ? 'Saving...' : 'Save & Continue' }} -->
                <span class="icon-[tabler--chevron-right] size-5"></span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { technicalSchema } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepSotre = useStepStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: technicalSchema,
})

const { value: specialTechComplexitiesDesc, errorMessage: specialTechComplexitiesDescError } = useField('specialTechComplexitiesDesc');
const { value: keyEquipementDesc, errorMessage: keyEquipementDescError } = useField('keyEquipementDesc');


onMounted(async () => {
  await checkAuth()
  
  try {
    
    if (projectId) {
      await stepSotre.fetchStep(projectId)
      
      if (stepSotre.technicalData?.technicalComplexity) {
        setValues({
          specialTechComplexitiesDesc: stepSotre.technicalData.technicalComplexity.specialTechComplexitiesDesc || "",
          keyEquipementDesc: stepSotre.technicalData.technicalComplexity.keyEquipementDesc || "",
        });
      }
    }
  } catch (error) {
  }
})

const submittechnicalComplexity = handleSubmit(async (values) => {
  
  // console.log('Values', values);
  console.log('step 0');

  await checkAuth()

  console.log('step 1');
  
  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    console.log('step 2');
    
    await stepSotre.saveSection(
      'technical',
      'technicalComplexity',
      values,
      userId.value,
      projectId.value,
    )
      
  console.log('step 3');
    
    $notyf.success('Data saved successfully!')
    navigateTo('market-environment')
  } catch (error) {
    $notyf.error('Failed to save data')
  }
})
</script>