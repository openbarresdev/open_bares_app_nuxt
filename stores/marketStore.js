import { defineStore } from "pinia";
import { useDataStore } from "#imports";

export const useMarketStore = defineStore("market", () => {
  const marketData = ref({
    productionAndSales: {
      yearOne: {
        productionVolume: "",
        unitPrice: "",
        totalRevenue: "",
        netProfit: "",
      },
      yearTwo: {
        productionVolume: "",
        unitPrice: "",
        totalRevenue: "",
        netProfit: "",
      },
      yearThree: {
        productionVolume: "",
        unitPrice: "",
        totalRevenue: "",
        netProfit: "",
      },
    },
    targetMarket: {
      primaryCustomers: "",
      distributionChannels: "",
    },
    marketEnvironment: {
      sourceOfSupply: "",
      mainCompetitors: "",
      marketSubstitution: "",
      importRestrictions: "",
      criticalFactors: "",
    },
  });
   const isStepMarketComplete = ref(false);

  const isLoading = ref(false);
  const error = ref(null);
  const dataStore = useDataStore();
  

  const updateMarketData = (data) => {
    marketData.value = { ...marketData.value, ...data };
  };

  const fetchMarketData = async (projectId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch(`/api/market`, {
        method: "GET",
        params: { projectId: projectId },
      });

      if (response.success && response.data) {
        marketData.value = response.data;
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to load market data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const saveMarketData = async (userId, projectId, sectionName, sectionData) => {
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
        updateMarketData(sectionData);

        const sectionToPercentMap = {
          marketEnvironment: "marketPercent",
          environmentalImpact: "technicalPercent",
          successFactors: "investmentPercent",
          regulatoryEnvironment: "governmentPercent",
          implementationSchedule: "timelinePercent",
          documentLinks: "documentsPercent",
          profile: "profilePercent",
          technicalAssistance: "sponsorshipPercent",
        };

        const percentName =
          sectionToPercentMap[sectionName];

        // console.log(`Mapping: ${sectionName} → ${percentName}`);

        await dataStore.updateApplicationSteps(percentName, userId, projectId);
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
    marketData: readonly(marketData),
    isLoading: readonly(isLoading),
    error: readonly(error),

    updateMarketData,
    fetchMarketData,
    saveMarketData,
  };
});
