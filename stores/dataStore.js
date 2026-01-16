import { ref } from "vue";
import { defineStore } from "pinia";
import { useProfileStore, useSponsorshipStore } from "#imports";
// import { useAuth } from "~/composables/useAuth";

export const useDataStore = defineStore(
  "dataSore",
  () => {
    const profileSore = useProfileStore();
    const sponsorshipStore = useSponsorshipStore();
    const completedStepsCount = ref();
    const totalSteps = ref();
    const percentageProgress = ref(0);
    const isLoading = ref();

    const isFirstSteps = ref(true);
    const preferences = ref({
      currency: "euro",
    });

    // Application process 
    const steps = ref({
      profilePercent: false,
      sponsorshipPercent: false,
      marketPercent: false,
      technicalPercent: false,
      investmentFinancingPercent: false,
      governmentSupportPercent: false,
      projectTimelinePercent: false,
      supportingDocumentsPercent: false,
    });

    const updateApplicationSteps = (stepUpdates, userId, projectId, sectionName) => {
      steps.value = {
        ...steps.value,
        ...stepUpdates,
      };
   
      if (userId && projectId) {
        saveSteps(sectionName, steps.value, userId, projectId);
      }
    };

    const loadSteps = async (userId, projectId) => {
      console.log("fetchig application steps...");

      isLoading.value = true;
      const { data } = await useFetch("/api/application-settings", {
        query: { userId, projectId },
      });

      if (data.value?.success) {
        
        const mergedSteps = { ...steps.value, ...data.value.data };

        calculateProgress(mergedSteps);

        isLoading.value = false;

        isFirstSteps.value = false;

        return mergedSteps;
      }
      // console.log('something failed');
      isFirstSteps.value = true;

      return null;
    };

    const saveSteps = async (
      userId,
      projectId,
      stepUpdates
    ) => {
      console.log("saving to database started...");
      steps.value = { ...steps.value, ...stepUpdates };

      // console.log( "user id", userId);
      // console.log(projectId);
      
      const { data } = await useFetch("/api/application-settings", {
        method: "POST",
        body: { userId, projectId, steps: steps.value },
      });

      return data.value?.success || false;
    };

    const updateStep = async (
      stepName,
      value,
      userId,
      projectId
    ) => {
      if (userId && projectId) {
        await saveSteps(userId, projectId, { [stepName]: value });
      } else {
        steps.value[stepName] = value;
      }
    };

    const calculateProgress = (steps) => {

      totalSteps.value = Object.keys(steps).length;

      const allSteps = Object.keys(steps);

      const completedSteps = allSteps.filter((key) => steps[key] === true);

      console.log(completedSteps);
      
      percentageProgress.value = Math.round(
        (completedSteps.length / allSteps.length) * 100
      );

      completedStepsCount.value = completedSteps.length;

      return percentageProgress.value;
    };

    return {
      // State
      preferences,
      completedStepsCount,
      totalSteps,
      percentageProgress,
      isLoading,
      isFirstSteps,
      
      // Actions
      steps,
      loadSteps,
      saveSteps,
      updateStep,
      updateApplicationSteps,
      calculateProgress,

      // Actions API
    };
  }
  // {
  //   persist: {
  //     // storage: persistedState.localStorage,
  //     paths: ["steps", "applicationStatus"],
  //   },
  // }
);