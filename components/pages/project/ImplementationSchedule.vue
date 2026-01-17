<template>
  <div class="lg:max-w-[920px] m-1">
    <CommonPageHeading title="Implementation Schedule" description="Project preparation and completion timeline" />

    <form @submit.prevent="submitImplementationSchedule" class="py-3 lg:w-full max-lg:w-full">


        <!-- <div class="my-4">
            <span class="grow text-left text-base font-bold">
            Phase 1: Project planning and design
            </span>

            <div class="flex max-xl:flex-col xl:items-center items-start gap-2 my-4 bg-gray-50/50 py-4 px-4 rounded-md border-2 border-slate-200">
                <div class="flex items-center gap-2">
                    <div class="lg:text-base max-lg:text-sm w-20">
                        Start date
                    </div>
                    <CommonDateInput class="lg:w-40 w-full"
                        v-model="selectedDate"
                        label="Start Date "
                        placeholder="Select your Start Date"
                        :options="{
                            maxDate: new Date(),
                            dateFormat: 'd-m-Y'
                        }"
                    />
                </div>
                <div class="flex items-center gap-2">
                    <div class="lg:text-base max-lg:text-sm w-20">
                        End date
                    </div>
                    <CommonDateInput class="lg:w-40 w-full"
                        v-model="selectedDate"
                        label="End Date "
                        placeholder="Select your End Date "
                        :options="{
                            maxDate: new Date(),
                            dateFormat: 'd-m-Y'
                        }"
                    />
                </div>
                <div class="flex items-center gap-2 xl:w-82 sm:min-w-82 max-sm:w-full">
                    <div class="lg:text-base max-lg:text-sm w-20">
                        Duration
                    </div>
                        <CommonSelectVariant class="lg:w-40 w-full"
                            label="Duration"
                            :options="years"/>
                </div>
            </div>
        </div> -->


      <CommonPhases
        title="Phase 1: Project planning and design"
        id="1"
        :state="phase1State"
        @update:state="phase1State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 2: Regulatory approvals"
        id="2"
        :state="phase2State"
        @update:state="phase2State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 3: Land acquisition"
        id="3"
        :state="phase3State"
        @update:state="phase3State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 4: Construction/installation"
        id="4"
        :state="phase4State"
        @update:state="phase4State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 5: Equipment procurement"
        id="5"
        :state="phase5State"
        @update:state="phase5State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 6: Testing and commissioning"
        id="6"
        :state="phase6State"
        @update:state="phase6State = $event"
        description=""
      />

      <CommonPhases
        title="Phase 7: Commercial operations start"
        id="7"
        :state="phase7State"
        @update:state="phase7State = $event"
        description=""
      />
      
      <div class="sm:inline-flex items-center gap-2 space-y-3 w-full mx-2 mt-6">
        <div class="lg:text-base max-lg:text-sm w-1/2">
          Expected project completion date
        </div>
        <CommonDateInput 
          class="lg:w-1/2 w-full"
          v-model="completionDate"
          label="Completion Date"
          placeholder="Select your completion date"
          :options="{
            minDate: new Date(),
            dateFormat: 'd-m-Y'
          }"
          :hasError="!!completionDateError"
          :errorMessage="completionDateError"
        />
      </div>

      <div class="sm:inline-flex items-center gap-2 space-y-3 w-full m-2 mt-6">
        <div class="lg:text-base max-lg:text-sm w-1/2">
          Commercial operations start date
        </div>
        <CommonDateInput 
          class="lg:w-1/2 w-full"
          v-model="operationDate"
          label="Operation date"
          placeholder="Select operation date"
          :options="{
            minDate: new Date(),
            dateFormat: 'd-m-Y'
          }"
          :hasError="!!operationDateError"
          :errorMessage="operationDateError"
        />
      </div>

      <button 
        type="submit" 
        :disabled="hasValidationErrors"
        class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-6"
      > 
        <span v-if="stepStore.isLoading" class="loading loading-spinner"></span>
        {{ stepStore.isLoading ? 'Saving...' : 'Save & Continue' }}
        <span class="icon-[tabler--chevron-right] size-5"></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { implementationSchedule } from '~/validation/formValidationSchema'
import { useStepStore } from '@/stores/useStepStore'
import { useForm, useField } from "vee-validate"

const { userId, projectId, checkAuth } = useAuth()
const stepStore = useStepStore()
const nextPage = usePageNav()

const { $notyf } = useNuxtApp()

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: implementationSchedule,
})

// Define fields with useField for dates
const { value: completionDate, errorMessage: completionDateError } = useField('completionDate')
const { value: operationDate, errorMessage: operationDateError } = useField('operationDate')

// Phase states (assuming CommonPhases has a v-model or emits events)
const phase1State = ref(false)
const phase2State = ref(false)
const phase3State = ref(false)
const phase4State = ref(false)
const phase5State = ref(false)
const phase6State = ref(false)
const phase7State = ref(false)

// Create a computed property for phaseStates
const phaseStates = computed(() => ({
  phase1: phase1State.value,
  phase2: phase2State.value,
  phase3: phase3State.value,
  phase4: phase4State.value,
  phase5: phase5State.value,
  phase6: phase6State.value,
  phase7: phase7State.value
}))

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0
})

onMounted(async () => {
  await checkAuth()
  
  try {
    if (projectId.value) {
      await stepStore.fetchStep('timeline', projectId.value)

      if (stepStore.state?.implementationSchedule) {
        const data = stepStore.state.implementationSchedule
        
        setValues({
          completionDate: data.completionDate || "",
          operationDate: data.operationDate || ""
        })
        
        // Set phase states if they exist in the data
        if (data.phaseStates) {
          phase1State.value = data.phaseStates.phase1 || false
          phase2State.value = data.phaseStates.phase2 || false
          phase3State.value = data.phaseStates.phase3 || false
          phase4State.value = data.phaseStates.phase4 || false
          phase5State.value = data.phaseStates.phase5 || false
          phase6State.value = data.phaseStates.phase6 || false
          phase7State.value = data.phaseStates.phase7 || false
        }
      }
    }
  } catch (error) {
    console.error('Error fetching implementation schedule:', error)
  }
})

const submitImplementationSchedule = handleSubmit(async (values) => {
  await checkAuth()

  try {
    if (!projectId.value) {
      $notyf.error('No project found')
      return
    }

    // Combine date values with phase states
    const allValues = {
      ...values,
      phaseStates: phaseStates.value
    }

    await stepStore.saveSection(
      'timeline',
      'implementationSchedule',
      allValues,
      userId.value,
      projectId.value,
    )
      
    $notyf.success('Implementation schedule saved successfully!')
    nextPage.goToNextPage('supporting-documents')
  } catch (error) {
    $notyf.error('Failed to save implementation schedule')
  }
})
</script>