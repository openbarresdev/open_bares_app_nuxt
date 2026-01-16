import { defineStore } from "pinia";
import { useDataStore } from "#imports";

export const useTechnicalStore = defineStore("technical", () => {
  const technicalData = ref({
    technicalComplexity: {
      specialTechComplexitiesDesc: "",
      keyEquipementDesc: "",
    },
    RawMaterialsSupplyChain: {
      primaryCustomers: "",
      distributionChannels: "",
    },
    PlantLocationSize: {
      sourceOfSupply: "",
    },
    OperatingCosts: {
      primaryCustomers: "",
      distributionChannels: "",
    },
    InfrastructureRequirements: {
      primaryCustomers: "",
      distributionChannels: "",
    },
    HumanResources: {
      primaryCustomers: "",
      distributionChannels: "",
    },
    EnvironmentalSocialImpact: {
      primaryCustomers: "",
      distributionChannels: "",
    },
  });
  const isStepTechnicalComplete = ref(false);

  const isLoading = ref(false);
  const error = ref(null);
  const dataStore = useDataStore();

  const updateTechnicalData = (data) => {
    technicalData.value = { ...technicalData.value, ...data };
  };

  const fetchtechnicalData = async (projectId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch(`/api/market`, {
        method: "GET",
        params: { projectId: projectId },
      });

      if (response.success && response.data) {
        technicalData.value = response.data;
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to load market data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const saveMarketData = async (
    userId,
    projectId,
    sectionName,
    sectionData
  ) => {
    isLoading.value = true;
    error.value = null;

    console.log("user id", userId);
    console.log("project id", projectId);
    console.log("section", sectionName);

    // console.log('Clicked');
    console.log("section data", sectionData);

    try {
      const response = await $fetch("/api/market", {
        method: "POST",
        body: {
          projectId,
          ...sectionData,
        },
      });

      if (response.success) {
        updateTechnicalData(sectionData);

        if (sectionName === "marketEnvironment") {
          isStepMarketComplete.value = true;

          dataStore.updateApplicationSteps(
            { marketPercent: isStepMarketComplete.value },
            userId,
            projectId,
            sectionName
          );
        }
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to save market data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    technicalData: readonly(technicalData),
    isLoading: readonly(isLoading),
    error: readonly(error),

    updateTechnicalData,
    fetchMarketData,
    saveMarketData,
  };
});
