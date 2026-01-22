<template>
    <div>
        <CommonPageHeading title="Raw Materials & Supply Chain" description="Source and cost of raw materials" />

        <form @submit.prevent="submitrawMaterials" class="space-y-4">
            <CommonTextArea class="mt-6"
                v-model="sourceRawMaterials"
                label="Source of raw materials"
                :rows="5"
                placeholder="Provide the Source of raw materials"
                :hasError="!!sourceRawMaterialsError"
                :errorMessage="sourceRawMaterialsError"
                />

            <CommonPageHeading title="" description="Quality assurance measures" />
            <CommonTextArea class="mt-4"
                v-model="qualityAssuranceMeasures"
                label="Quality assurance measures"
                :rows="5"
                placeholder="Provide your Quality assurance measures"
                :hasError="!!qualityAssuranceMeasuresError"
                :errorMessage="qualityAssuranceMeasuresError"
                />

            <CommonPageHeading title="" description="Import restrictions on required materials" />
            <CommonTextArea class="mt-4"
                v-model="importRestrictions"
                label="Import restrictions"
                :rows="5"
                placeholder="Provide Import restrictions on the required materials"
                :hasError="!!importRestrictionsError"
                :errorMessage="importRestrictionsError"
                />
             <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
               <button 
                   type="submit" :disabled="hasValidationErrors"
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
import { rawMaterialsSupplyChain } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: rawMaterialsSupplyChain,
})

const { value: sourceRawMaterials, errorMessage: sourceRawMaterialsError } = useField('sourceRawMaterials');
const { value: qualityAssuranceMeasures, errorMessage: qualityAssuranceMeasuresError } = useField('qualityAssuranceMeasures');
const { value: importRestrictions, errorMessage: importRestrictionsError } = useField('importRestrictions');

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth()
  
  try {
    
    if (projectId.value) {
      await stepStore.fetchStep('technical', projectId.value)

      if (stepStore.state?.rawMaterials) {
        setValues({
            sourceRawMaterials: stepStore.state?.rawMaterials.sourceRawMaterials || "",
            qualityAssuranceMeasures: stepStore.state?.rawMaterials.qualityAssuranceMeasures || "",
            importRestrictions: stepStore.state?.rawMaterials.importRestrictions || ""
        });
      }
    }
  } catch (error) {
  }
})

const submitrawMaterials = handleSubmit(async (values) => {
  
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
      'rawMaterials',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Data saved successfully!')
    navigateTo('plant-location-and-size')
  } catch (error) {
    $notyf.error('Failed to save data')
  }
})
</script>