import { ref } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore(
  "dataSore",
  () => {
    const completedStepsCount = ref();
    const totalSteps = ref();
    const percentageProgress = ref(0);
    const isLoading = ref();

    const isFirstSteps = ref(true);
    const preferences = ref({
      currency: "euro",
      lang: "",
    });

    // Application process
    const steps = ref({
      profilePercent: false,
      sponsorshipPercent: false,
      marketPercent: false,
      technicalPercent: false,
      investmentPercent: false,
      governmentPercent: false,
      timelinePercent: false,
      documentsPercent: false,
    });

    const updateApplicationSteps = async (
      stepKey,
      userId,
      projectId,
      currency,
      lang = null
    ) => {
      if (!userId || !projectId) return;

      steps.value[stepKey] = true;
      console.log("setpKey", stepKey);
      // console.log("steps.value[setpKey]", steps.value[stepKey]);

      await saveSteps(userId, projectId, {
        [stepKey]: true,
      });

      if (currency) {
        preferences.value.currency = currency;
        await savePreferences(userId, projectId, {
          currency,
        });
      }

      if (lang) {
        preferences.value.lang = lang;
        await savePreferences(userId, projectId, {
          lang,
        });
      }

      calculateProgress(steps.value);
    };

    const loadSteps = async (userId, projectId) => {
      console.log("fetchig application data...");

      isLoading.value = true;
      const { data } = await useFetch("/api/application-settings", {
        query: { userId, projectId },
      });

      if (data.value?.success) {
        const response = data.value.data;

        console.log('fetched steps data');
        
        // Charger les steps
        if (response.steps) {
          steps.value = { ...steps.value, ...response.steps };
        }

        // Charger les préférences (currency)
        if (response.preferences) {
          preferences.value = { ...preferences.value, ...response.preferences };
        }

        // Calculer le progrès
        calculateProgress(steps.value);

        isLoading.value = false;
        isFirstSteps.value = false;

        return {
          steps: steps.value,
          preferences: preferences.value,
        };
      }
      // console.log('something failed');
      isFirstSteps.value = true;

      return null;
    };

    const saveSteps = async (userId, projectId, stepUpdates) => {
      const { data } = await useFetch("/api/application-settings", {
        method: "POST",
        body: {
          userId,
          projectId,
          steps: stepUpdates,
        },
      });

      console.log("data datsore", data.value);

      return data.value?.success || false;
    };

    const savePreferences = async (userId, projectId, preferencesData) => {
      const { data } = await useFetch("/api/application-settings", {
        method: "POST",
        body: {
          userId,
          projectId,
          preferences: preferencesData,
        },
      });

      console.log("API Response:", data.value);
      // console.log("API Error:", error.value);

      return data.value?.success || false;
    };

    const setLanguage = async (userId, projectId, lang) => {
      preferences.value.lang = lang;

      if (userId && projectId) {
        return await savePreferences(userId, projectId, { lang });
      }

      return true;
    };

    const loadLanguage = async (userId, projectId) => {
      const result = await loadSteps(userId, projectId);

      return preferences.value.lang;
    };

    const calculateProgress = (steps) => {
      const allSteps = Object.keys(steps);
      const completedSteps = allSteps.filter((key) => steps[key] === true);

      // console.log("Completed steps:", completedSteps);
      // console.log("Total steps:", allSteps.length);

      totalSteps.value = allSteps.length;
      completedStepsCount.value = completedSteps.length;
      percentageProgress.value = Math.round(
        (completedSteps.length / allSteps.length) * 100
      );

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
      // updateStep,
      updateApplicationSteps,
      calculateProgress,
      loadLanguage,
      setLanguage,

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