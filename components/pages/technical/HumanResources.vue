<template>
    <div>
        
        <CommonPageHeading title="Human Resources" description="Required workforce" />


            <form @submit.prevent="submithumanResources" class="mt-8">

                <div class="space-y-6 px-1.5 lg:w-1/2 max-lg:w-full">
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Management positions</div>
                            <CommonInputsVariant class="w-full"
                                    type="number"
                                    label="Management positions"
                                    placeholder="0"
                                    v-model="mangtPositionNumber"
                                    :hasError="mangtPositionNumberError"
                                    :errorMessage="errors.mangtPositionNumber"
                                />
                    </div>
                    
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Technical/skilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Technical/skilled workers"
                            placeholder="0"
                            v-model="techSkilledWorkersNumber"
                            :hasError="techSkilledWorkersNumberError"
                            :errorMessage="errors.techSkilledWorkersNumber"
                            />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Semi-skilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Semi-skilled workers"
                            placeholder="0"
                            v-model="semiTechSkilledWorkersNumber"
                            :hasError="semiTechSkilledWorkersNumberError"
                            :errorMessage="errors.semiTechSkilledWorkersNumber"
                            />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Unskilled workers</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Unskilled workers"
                            placeholder="0"
                            v-model="unskilledWorkersNumber"
                            :hasError="unskilledWorkersNumberError"
                            :errorMessage="errors.unskilledWorkersNumber"
                            />
                    </div>
                    <div class="inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Total employment</div>
                        <CommonInputsVariant class="w-full"
                            type="number"
                            label="Total employment"
                            placeholder="0"
                            v-model="totalEmployment"
                            :hasError="totalEmploymentError"
                            :errorMessage="errors.totalEmployment"
                            />
                    </div>

                    <div class="lg:mt-0 mt-3 space-y-6 w-full">
                        <CommonPageHeading title="" description="Availability of required skills in local market" />
                        <CommonTextArea class="mt-4"
                            label="Availability of required skills"
                            :rows="5"
                            placeholder="Provide your Availability of required skills in local market"
                            v-model="availableSkillsRequired"
                            :hasError="availableSkillsRequiredError"
                            :errorMessage="errors.availableSkillsRequired"
                            />
                    </div>
                </div>

                <button 
                    type="submit" :disabled="hasValidationErrors"
                    class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3"
                        > 
                    <span v-if="stepStore.isLoading" class="loading loading-spinner"></span>
                    {{ stepStore.isLoading ? 'Saving...' : 'Save & Continue' }}
                    <span class="icon-[tabler--chevron-right] size-5"></span>
                </button>
            </form>

    </div>
</template>

<script setup>
import { humanResources } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore();

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: humanResources,
})

const { value: mangtPositionNumber, errorMessage: mangtPositionNumberError } = useField('mangtPositionNumber');
const { value: techSkilledWorkersNumber, errorMessage: techSkilledWorkersNumberError } = useField('techSkilledWorkersNumber');
const { value: semiTechSkilledWorkersNumber, errorMessage: semiTechSkilledWorkersNumberError } = useField('semiTechSkilledWorkersNumber');
const { value: unskilledWorkersNumber, errorMessage: unskilledWorkersNumberError } = useField('unskilledWorkersNumber');
const { value: totalEmployment, errorMessage: totalEmploymentError } = useField('totalEmployment');
const { value: availableSkillsRequired, errorMessage: availableSkillsRequiredError } = useField('availableSkillsRequired');

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

      if (stepStore.state?.humanResources) {
        setValues({
            mangtPositionNumber: stepStore.state?.humanResources.mangtPositionNumber || "",
            techSkilledWorkersNumber: stepStore.state?.humanResources.techSkilledWorkersNumber || "",
            semiTechSkilledWorkersNumber: stepStore.state?.humanResources.semiTechSkilledWorkersNumber || "",
            unskilledWorkersNumber: stepStore.state?.humanResources.unskilledWorkersNumber || "",
            totalEmployment: stepStore.state?.humanResources.totalEmployment || "",
            availableSkillsRequired: stepStore.state?.humanResources.availableSkillsRequired || ""
        });
      }
    }
  } catch (error) {
  }
})

const submithumanResources = handleSubmit(async (values) => {
  
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
      'humanResources',
      values,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Data saved successfully!')
    navigateTo('infrastructure-requirements')
  } catch (error) {
    $notyf.error('Failed to save data')
  }
})
</script>