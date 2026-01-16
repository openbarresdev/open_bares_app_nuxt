import { defineStore } from "pinia";

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

interface DataStoreOptions<T> {
  resourceName: string;
  apiEndpoint: string;
  defaultData: T;
}

export const createGenericDataStore = <T>(options: DataStoreOptions<T>) => {
  return defineStore(`${options.resourceName}Data`, () => {
    // State
    const data = ref<T>(options.defaultData);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    // Actions
    const fetchData = async (projectId: string | number): Promise<T | null> => {
      isLoading.value = true;
      error.value = null;

      try {
        const { data: response } = await useFetch<ApiResponse<T>>(
          `${options.apiEndpoint}`,
          {
            query: { projectId },
          }
        );

        if (response.value?.success && response.value.data) {
          data.value = {
            ...options.defaultData,
            ...response.value.data,
          } as T;
          return data.value;
        }
        return null;
      } catch (err) {
        error.value = "Failed to fetch data";
        console.error(`Error fetching ${options.resourceName}:`, err);
        return null;
      } finally {
        isLoading.value = false;
      }
    };

    const saveData = async (
      projectId: string | number,
      updateData: Partial<T>
    ): Promise<boolean> => {
      isLoading.value = true;
      error.value = null;

      try {
        // Lokal aktualisieren
        data.value = {
          ...data.value,
          ...updateData,
        } as T;

        // An API senden
        const requestBody: Record<string, any> = {
          projectId,
          [options.resourceName]: updateData, // Computed property name
        };

        const { data: response } = await useFetch<ApiResponse<T>>(
          `${options.apiEndpoint}`,
          {
            method: "POST",
            body: requestBody,
          }
        );

        return response.value?.success || false;
      } catch (err) {
        error.value = "Failed to save data";
        console.error(`Error saving ${options.resourceName}:`, err);
        return false;
      } finally {
        isLoading.value = false;
      }
    };

    const resetData = () => {
      data.value = { ...options.defaultData };
    };

    return {
      // State
      data: readonly(data),
      isLoading: readonly(isLoading),
      error: readonly(error),

      // Actions
      fetchData,
      saveData,
      resetData,
    };
  });
};