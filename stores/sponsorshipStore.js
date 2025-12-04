import { ref } from "vue";
import { defineStore } from "pinia";

export const useSponsorshipStore = defineStore("sponsorship", () => {
  const sponsorship = ref({
    sponsorInfo: {
      sponsor: "",
      regnumber: "",
      countryOfIncorporation: "",
      dateOfIncorporation: "",
      legalStructure: "",
    },
    sponsorBusinessHist: {
      currency: "",
      firstYearRevenu: "",
      secondYearRevenu: "",
      thirdthYearRevenu: "",
      totalAssets: "",
      netWorth: "",
    },
    managementStructure: {
        businessDes: "",
        ceo: {
          name: "",
          yearExperiance: "",
          previousPosition: "",
          educationDegree: "",
        },
        cfo: {
          name: "",
          yearExperiance: "",
          previousPosition: "",
          educationDegree: "",
        },
        cto: {
          name: "",
          yearExperiance: "",
          previousPosition: "",
          educationDegree: "",
        },
    },
    technicalAssistance: {
      managementAssist: "",
      productionAssist: "",
      marketingAssist: "",
      financielAssist: "",
      others: "",
    }
  });

  const isLoading = ref(false);
  const error = ref(null);

  // Actions
  const updateSponsorship = (data) => {
    sponsorship.value = { ...sponsorship.value, ...data };
  };

  const updateSponsorInfo = (sponsorInfoData) => {
    sponsorship.value.sponsorInfo = {
      ...sponsorship.value.sponsorInfo,
      ...sponsorInfoData,
    };
  };

  const fetchSponsorship = async (projectId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch("/api/sponsorship", {
        method: "GET",
        params: { projectId: projectId },
      });

      if (response.success && response.data) {
        // Persist data in store
        sponsorship.value = response.data;
        console.log("information data is", response.data);
        
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to load sponsorship data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const saveSponsorship = async (projectId, sectionData) => {
    isLoading.value = true;
    error.value = null;

    console.log('project is', projectId);
    console.log("sectionData is", sectionData);
    
    try {
      const response = await $fetch("/api/sponsorship", {
        method: "POST",
        body: {
          projectId,
          ...sectionData,
        },
      });

      // Update local state with saved data
      if (response.success) {
        updateSponsorship(sectionData);
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to save sponsorship data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    // State
    sponsorship: readonly(sponsorship),
    isLoading: readonly(isLoading),
    error: readonly(error),

    // Actions
    updateSponsorship,
    updateSponsorInfo,
    fetchSponsorship,
    saveSponsorship,
  };
});