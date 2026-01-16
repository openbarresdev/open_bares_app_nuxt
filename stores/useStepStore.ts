// stores/useStepStore.ts - KORRIGIERT
import { defineStore } from "pinia";
import { ref, readonly } from "vue";
import { useDataStore } from "#imports";

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export const useStepStore = defineStore("step", () => {
  const state = ref<Record<string, any>>({});
  const isLoading = ref(false);
  const error = ref<string | undefined>(undefined); // ✅ Ändere zu undefined

  const dataStore = useDataStore();

  /**
   * GET générique
   */
  const fetchStep = async (
    stepName: string,
    projectId: number
  ): Promise<ApiResponse> => {
    isLoading.value = true;
    error.value = undefined; // ✅ Setze undefined statt null

    try {
      console.log(`🔍 Fetching step: ${stepName}, project: ${projectId}`);

      const response = await $fetch<ApiResponse>(`/api/steps/${stepName}`, {
        method: "GET",
        params: { projectId },
      });

      if (response.success && response.data) {
        state.value = response.data;
      }

      return response;
    } catch (err: any) {
      const errorMessage = err.data?.error || err.message || "Fetch failed";
      error.value = errorMessage; // ✅ Direkt zuweisen

      return {
        success: false,
        error: errorMessage, // ✅ Gleicher Wert
      };
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
    isLastSection = false
  ): Promise<ApiResponse> => {
    isLoading.value = true;
    error.value = undefined; // ✅ undefined

    try {
      const response = await $fetch<ApiResponse>(`/api/steps/${stepName}`, {
        method: "POST",
        body: {
          projectId,
          sectionName,
          sectionData,
        },
      });

      if (response.success) {
        // Update local state
        state.value = {
          ...state.value,
          [sectionName]: {
            ...(state.value[sectionName] || {}),
            ...sectionData,
          },
        };

        if (isLastSection) {
          await dataStore.updateApplicationSteps(
            { [`${stepName}Percent`]: true },
            userId,
            projectId
          );
        }
      } else {
        throw new Error(response.error || "Save failed");
      }

      return response;
    } catch (err: any) {
      const errorMessage = err.data?.error || err.message || "Save failed";
      error.value = errorMessage; // ✅ Direkt zuweisen

      return {
        success: false,
        error: errorMessage, // ✅ Gleicher Wert
      };
    } finally {
      isLoading.value = false;
    }
  };

  return {
    state: readonly(state),
    isLoading: readonly(isLoading),
    error: readonly(error),

    fetchStep,
    saveSection,

    // Helper
    getSection: (sectionName: string) => state.value[sectionName],
  };
});