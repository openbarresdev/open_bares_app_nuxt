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
      projectDescription:"",
      currency: "",
      firstYearRevenue: "",
      secondYearRevenue: "",
      thirdYearRevenue: "",
      totalAssets: "",
      netWorth: "",
    },
    managementStructure: {
      structureManagementDesc: "",
      ceo: {
        name: "",
        yearExperience: "",
        previousPosition: "",
        educationDegree: "",
      },
      cfo: {
        name: "",
        yearExperience: "",
        previousPosition: "",
        educationDegree: "",
      },
      cto: {
        name: "",
        yearExperience: "",
        previousPosition: "",
        educationDegree: "",
      },
    },
    technicalAssistance: {
      managementAssist: "",
      productionAssist: "",
      marketingAssist: "",
      financialAssist: "",
      others: "",
    },
  });

  const isLoading = ref(false);
  const error = ref(null);

  // Actions pour mettre à jour chaque section
  const updateSponsorInfo = (data) => {
    sponsorship.value.sponsorInfo = {
      ...sponsorship.value.sponsorInfo,
      ...data,
    };

    // console.log('sponsor info', sponsorship.value.sponsorInfo);
    // console.log("sponsor", sponsorship.value);
    
  };

  const updateBusinessHistory = (data) => {
    sponsorship.value.sponsorBusinessHist = {
      ...sponsorship.value.sponsorBusinessHist,
      ...data,
    };
    console.log('passed');
    
    // console.log("All data", sponsorship.value);
    // console.log("updateBusinessHistory", sponsorship.value.sponsorBusinessHist);

  };

  const updateManagementStructure = (data) => {
    sponsorship.value.managementStructure = {
      ...sponsorship.value.managementStructure,
      ...data,
    };

    // console.log("managementStructure", sponsorship.value.managementStructure);
  };

  const updateTechnicalAssistance = (data) => {
    sponsorship.value.technicalAssistance = {
      ...sponsorship.value.technicalAssistance,
      ...data,
    };
  };

  // Fetch toutes les données
  const fetchSponsorship = async (projectId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await $fetch("/api/sponsorship", {
        method: "GET",
        params: { projectId: projectId },
      });

      if (response.success && response.data) {
        // Merge les données reçues avec l'état initial
        sponsorship.value = {
          ...sponsorship.value,
          ...response.data,
        };

        console.log('SPONsor', sponsorship.value);
        // console.log("SPONsor response", response.data);
        
      }

      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to load sponsorship data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Sauvegarder une section spécifique
  const saveSponsorshipSection = async (
    projectId,
    sectionName,
    sectionData
  ) => {
    isLoading.value = true;
    error.value = null;

    console.log("project id", projectId);
    console.log("project id", sectionName);
    console.log("project id", sectionData);
    
    try {
      const response = await $fetch("/api/sponsorship", {
        method: "POST",
        body: {
          projectId,
          sectionName, // "sponsorInfo", "sponsorBusinessHist", etc.
          sectionData,
        },
      });

      // Mettre à jour le store local
      if (response.success && response.data) {
        sponsorship.value[sectionName] = {
          ...sponsorship.value[sectionName],
          ...sectionData,
        };
      }

      console.log('DATA'), response.data;
      
      return response;
    } catch (err) {
      error.value = err.data?.message || "Failed to save sponsorship data";
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Sauvegarder tout en une fois (optionnel)
  // const saveAllSponsorship = async (projectId) => {
  //   isLoading.value = true;
  //   error.value = null;

  //   try {
  //     const response = await $fetch("/api/sponsorship/save-all", {
  //       method: "POST",
  //       body: {
  //         projectId,
  //         ...sponsorship.value,
  //       },
  //     });

  //     return response;
  //   } catch (err) {
  //     error.value = err.data?.message || "Failed to save all sponsorship data";
  //     throw err;
  //   } finally {
  //     isLoading.value = false;
  //   }
  // };

  return {
    // State
    sponsorship: readonly(sponsorship),
    isLoading: readonly(isLoading),
    error: readonly(error),

    // Actions pour chaque section
    updateSponsorInfo,
    updateBusinessHistory,
    updateManagementStructure,
    updateTechnicalAssistance,

    // Actions API
    fetchSponsorship,
    saveSponsorshipSection,
    // saveAllSponsorship,
  };
});