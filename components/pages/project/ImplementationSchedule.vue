<template>
  <div class="lg:max-w-[920px] m-1">
    <CommonPageHeading
      title="Implementation Schedule"
      description="Project preparation and completion timeline"
    />

    <form
      @submit.prevent="submitImplementationSchedule"
      class="py-3 lg:w-full max-lg:w-full"
    >

      <div v-if="isLoading" class="flex justify-center p-10">
        <span class="loading loading-spinner">Loading schedule...</span>
      </div>


      <div v-else class="max-w-xl space-y-4 py-3">
        <CommonAccordion2
          v-for="(phase, index) in phaseSteps"
          :key="phase.id"
          :ref="(el) => (accordions[index] = el)"
          :title="`Phase ${phase.id}: ${phase.name}`"
        >
          <CommonPhases2
            :ref="(el) => (phaseRefs[index] = el)"
            :initialData="phasesResults[phase.id]"
            @update:phaseData="handlePhaseUpdate(phase.id, $event)"
            @update:isValid="handleValidationUpdate(phase.id, $event)"
          />

          <div class="flex items-center justify-end gap-4 mx-2 mt-4">
            <button
              type="button"
              @click="resetOnePhase(index)"
              class="py-3.5 px-4 border-2 rounded-xl border-slate-300 lg:w-30 max-lg:min-w-1/2"
            >
              Cancel
            </button>
            <button type="button" @click="closeOnePhase(index)" class="py-3.5 px-4 border-2 bg-primary text-white rounded-xl lg:w-30 max-lg:min-w-1/2">save</button>
          </div>
        </CommonAccordion2>
      </div>

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
            dateFormat: 'd-m-Y',
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
            dateFormat: 'd-m-Y',
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
        {{ stepStore.isLoading ? "Saving..." : "Save & Continue" }}
        <span class="icon-[tabler--chevron-right] size-5"></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { phaseSteps } from "/assets/data/data";
import { implementationSchedule } from "~/validation/formValidationSchema";
import { useStepStore } from "@/stores/useStepStore";
import { useForm, useField } from "vee-validate";

// const hasNoError = ref();
const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();
const nextPage = usePageNav();

const { $notyf } = useNuxtApp();

// Stockage des données et de la validité
const phasesResults = ref({})
const phasesValidity = ref({})
const isLoading = ref(true);

// Gestion des Refs dynamiques
const phaseRefs = ref([])
const accordions = ref([])

const handlePhaseUpdate = (id, data) => {
  phasesResults.value[id] = data
}

const handleValidationUpdate = (id, isValid) => {
  phasesValidity.value[id] = isValid
}

const resetOnePhase = (index) => {
  if (phaseRefs.value[index]) {
    phaseRefs.value[index].reset() // Appelle le reset de l'enfant
  }
  if (accordions.value[index]) {
    accordions.value[index].close() // Ferme l'accordéon
  }
}

const closeOnePhase = (index) => {
  if (accordions.value[index]) {
    accordions.value[index].close() // Ferme l'accordéon
  }
}

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: implementationSchedule,
});

// Define fields with useField for dates
const { value: completionDate, errorMessage: completionDateError } =
  useField("completionDate");
const { value: operationDate, errorMessage: operationDateError } =
  useField("operationDate");

// Phase states (assuming CommonPhases has a v-model or emits events)

const hasValidationErrors = computed(() => {
  return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth();

  try {
    if (projectId.value) {
      await stepStore.fetchStep("timeline", projectId.value);
      
      if (stepStore.state?.implementationSchedule) {
        const data = stepStore.state.implementationSchedule;

        setValues({
          completionDate: data.completionDate || "",
          operationDate: data.operationDate || "",
        });

        // Set phase states if they exist in the data
        if (data.phaseStates) {
          // phasesResults.value = data.phaseStates;
          Object.assign(phasesResults.value, savedData.phaseStates);
        }
      }
    }
  } catch (error) {
    console.error("Error fetching implementation schedule:", error);
  }finally {
    isLoading.value = false;
  }

  // Update data in the object when child emits change
  // const handlePhaseUpdate = (id, data) => {
  //   phasesResults.value[id] = data;
  // };
});

const submitImplementationSchedule = handleSubmit(async (values) => {
  await checkAuth();

  try {
    if (!projectId.value) {
      $notyf.error("No project found");
      return;
    }

    // Combine date values with phase states
    const allValues = {
      ...values,
      projectTimeline: {
      phases: phasesResults.value
    }
    };

    await stepStore.saveSection(
      "timeline",
      "implementationSchedule",
      allValues,
      userId.value,
      projectId.value
    );

    $notyf.success("Implementation schedule saved successfully!");
    nextPage.goToNextPage("supporting-documents");
  } catch (error) {
    $notyf.error("Failed to save implementation schedule");
  }
});
</script>
