import { ref } from "vue";
import { defineStore } from "pinia";
import { useProfileStore, useSponsorshipStore } from "#imports";


export const useDataStore = defineStore(
  "dataSore",
  () => {
    const profileSore = useProfileStore();
    const sponsorshipStore = useSponsorshipStore();
    const preferences = ref({
      currency: "euro",
    });

    // Application process 
    const steps = ref({
      profilePercent: false,
      sponsorshipPercent: false,
    });

    const updateApplicationSteps = (data) => {
      steps.value = {
        ...steps.value,
        ...data,
      };
      console.log("process", steps.value);
    };

    const loadSteps = async (userId, projectId) => {
      const { data } = await useFetch("/api/application-settings", {
        query: { userId, projectId },
      });

      if (data.value?.success) {
        steps.value = { ...steps.value, ...data.value.data };
      }
    };

    // Sauvegarder vers API
    const saveSteps = async (
      userId,
      projectId,
      stepUpdates
    ) => {
      steps.value = { ...steps.value, ...stepUpdates };

      const { data } = await useFetch("/api/application-settings", {
        method: "POST",
        body: { userId, projectId, steps: steps.value },
      });

      return data.value?.success || false;
    };

    // Mettre à jour un step
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

    const percentageProgress = ref();

    const calculatePercentage = () => {
      const data = {
        ...steps.value,
      };
      // let totalProcess = 0;
      // console.log("data", Object.entries(data).length);

      let totalProcess = Object.entries(data).length;
      let currentApplied = Object.keys(steps.value).filter(
        (key) => steps.value[key] === true
      );

      console.log("totalProcess", totalProcess);
      console.log("currentApplied array", currentApplied);

      // console.log("calculated", (Number(currentApplied) / totalProcess) * 100);


      // percentageProgress.value = computed(() => {
      //   if (currentApplied != 0) { 
      //     return (currentApplied / totalProcess) * 100;
      //   } 
          
      // })
      // console.log("percentageProgress", percentageProgress.value);

      // return percentageProgress;
    };

    return {
      // State
      preferences,
      percentageProgress,
      
      // Actions
      steps,
      loadSteps,
      saveSteps,
      updateStep,
      updateApplicationSteps,
      calculatePercentage,

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