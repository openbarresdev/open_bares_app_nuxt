import { defineStore } from "pinia";

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
      primaryUserDesc: "",
      contributionChannel: "",
    },
    marketEnvironment: {
      sourceOfSupply: "",
      mainCompetitors: "",
      marketSubstitution: "",
      importRestrictions: "",
      criticalFactors: "",
    },
  });

  const isLoading = ref(false);
  const error = ref(null);

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

  const saveMarketData = async (projectId, sectionData) => {
    isLoading.value = true;
    error.value = null;

    console.log('Clicked');
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
