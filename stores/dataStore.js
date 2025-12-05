import { ref } from "vue";
import { defineStore } from "pinia";
import { useProfileStore, useSponsorshipStore } from "#imports";


export const useDataStore = defineStore("dataSore", () => {
  const profileSore = useProfileStore();
  const sponsorshipStore = useSponsorshipStore();

  const applicationProcess = ref({
    profilePercent: profileSore.isStepProfileComplete,
    sponsorshipPercent: sponsorshipStore.isStepSponsorshipComplete
  });

  const updateApplicationProcess = (data) => {
    applicationProcess.value = {
      ...applicationProcess.value,
      ...data
    };
  }

  const percentageValue = ref();

  const calculatePercentage = () => {
    let totalProcess = applicationProcess.value.lenght
    let completed = Object.keys(applicationProcess.value).filter(key => applicationProcess.value[key] === true);
    
    console.log("completed array", completed);
  }

  return {
    // State
    percentageValue: readonly(percentageValue),

    // Actions
    updateApplicationProcess,
    calculatePercentage,

    // Actions API
  };
});