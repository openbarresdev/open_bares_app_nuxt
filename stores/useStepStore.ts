import { defineStore } from "pinia";
import { ref, readonly } from "vue";
import { useDataStore } from "#imports";

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };
  

export const useStepStore = defineStore("step", () => {
  const state = ref<Record<string, any>>({});
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const isLastSection = ref(false);
  const dataStore = useDataStore();

  /**
   * Met à jour une section locale
   */
  const updateSection = (sectionName: string, data: any) => {
    state.value[sectionName] = {
      ...state.value[sectionName],
      ...data,
    };
  };

  /**
   * GET générique
   */
  const fetchStep = async (stepName: string, projectId: number) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch<ApiResponse<Record<string, any>>>(
        `/api/steps/${stepName}`,
        {
          method: "GET",
          params: { projectId },
        }
      );

        if (response.success) {
          console.log('data', response);
        state.value = response.data;
      }

      return response;
    } catch (err: any) {
      error.value = err.data?.message || "Fetch failed";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * POST générique
   */
  const saveSection = async (
    stepName: string,
    sectionName: string,
    sectionData: any,
    userId: number,
    projectId: number,
    
  ) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      let dataToSave = { ...sectionData };
      let currency : string | undefined;

      if (dataToSave.currency) {
        currency = dataToSave.currency;
        delete dataToSave.currency;
      }

      console.log('currency', currency);
      

      const response = await $fetch(`/api/steps/${stepName}`, {
        method: "POST",
        body: {
          projectId,
          sectionName,
          sectionData: dataToSave,
        },
      });

      if (response.success) {
        updateSection(sectionName, sectionData);

        if (
          sectionName === "marketEnvironment" ||
          sectionName === "environmentalImpact" ||
          sectionName === "successFactors" ||
          sectionName === "regulatoryEnvironment" ||
          sectionName === "implementationSchedule" ||
          sectionName === "documentLinks" ||
          sectionName === "technicalAssistance"
        ) {
          const percentName = `${stepName}Percent`;

          await dataStore.updateApplicationSteps(
            percentName,
            userId,
            projectId,
            currency,
          );
        }
      }

      return response;
    } catch (err: any) {
      error.value = err.data?.message || "Save failed";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    state: readonly(state),
    isLoading: readonly(isLoading),
    error: readonly(error),

    updateSection,
    fetchStep,
    saveSection,
  };
});
