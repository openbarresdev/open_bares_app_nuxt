import { ref } from "vue";
import { defineStore } from "pinia";
import { useDataStore } from "#imports";

export const useProfileStore = defineStore('profileStore', () => {
  // states here
  const selectedCountry = ref("");
  const countries = ref([]);
  const applicant = ref({
    userId: "",
    name: "",
    title: "",
    companyName: "",
    country: "",
    city: "",
    state: "",
    projectType: "",
    industrialSector: "",
    projectDescription: "",
  });
  // const isStepProfileComplete = ref(false);
  const isLoading = ref(false);
  const error = ref("");
  const projectId = ref("");

  const dataStore = useDataStore();

  // actions here
  const countriesOptions = computed(() => {
    return countries.value.map((country) => ({
      id: country.cca2,
      value: country.name.common,
    }));
  });

  onMounted(async () => {
    try {
      const data = await $fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      countries.value = data;
      // console.log('country', countries.value);
      // console.log('country name', countries.value[0]);
    } catch (error) {
      console.error("Failed to load resource", error);
      // console.log( 'Failed with error:', error)
    }
  });

  // const getUserId = () => {
  //     const { userId, isAuthenticated } = useAuth();
  //     if (isAuthenticated) {
  //         return userId
  //     }
  // }

  // FETCH
  async function fetchApplicant(user_id) {
    try {
      isLoading.value = true;
      error.value = "";

      const res = await $fetch("/api/applicant-project", {
        method: "GET",
        params: { userId: user_id.value },
      });
      applicant.value = res;
      // projectId.value = res.project.id;
      // console.log("Applicant data", applicant.value);
    } catch (err) {
      error.value = "Failed to load applicant data";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  }
// userId, projectId, sectionName, sectionData;
  // PUT
  async function updateApplicant(applicant, user_id, sectionName, notyf) {
    try {
      isLoading.value = true;
      error.value = "";

      const payload = {
        userId: user_id,
        ...applicant,
      };

      console.log("Payload being sent:", payload);

      const res = await $fetch("/api/applicant-project", {
        method: "POST",
        body: payload,
      });

      if (!res.success) throw new Error(res.error);

      applicant.value = res.project; // save updated result from DB
      // console.log("Project id", applicant.value.id);
      // console.log("sectionName", sectionName);
      // console.log("user_id", user_id);

       if (res.success) {

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

         await dataStore.updateApplicationSteps(
           percentName,
           user_id,
           applicant.value.id,
         );
       }

      setTimeout(() => {
        navigateTo("/user/dashboard/sponsorship/sponsor-information");
      }, 3000);
    } catch (err) {
      error.value = "Failed to update applicant";
      console.error(err);
      notyf.error(error.value);
    } finally {
      isLoading.value = false;
    }
  }

  // FETCH
  async function getProjectId(user_id) {
    try {
      const res = await $fetch("/api/applicant-project", {
        method: "GET",
        params: { userId: user_id },
      });
      projectId.value = res.project.id;
      // console.log('Od is', projectId.value);
    } catch (err) {
      error.value = "Failed to get project id";
      console.error(err);
    } 
  }

  return {
    // states returned
    selectedCountry,
    applicant,
    isLoading,
    error,
    // isStepProfileComplete,
    projectId,

    // actions returned
    countriesOptions,
    updateApplicant,
    fetchApplicant,
    getProjectId,
  };
})