import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore('profileStore', () => {
    
    // states here
    const selectedCountry = ref('');
    const countries = ref([]);
    const applicant = ref({
      userId:"",
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
    const isStepProfileComplete = ref(false);
    const isLoading = ref(false);
    const error = ref("");


    // actions here
    const countriesOptions = computed(() => {
        return countries.value.map(country => ({
            id: country.cca2,
            value: country.name.common,
        }))
    })

    onMounted(async () => {
        try {
            const data = await $fetch('https://restcountries.com/v3.1/independent?status=true');
            countries.value = data;
            // console.log('country', countries.value);
            // console.log('country name', countries.value[0]);
            
        } catch (error) {
            console.error('Failed to load resource', error)
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
        // console.log("Applicant data", applicant.value);
      } catch (err) {
        error.value = "Failed to load applicant data";
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }


    // PUT
    async function updateApplicant(applicant, user_id, notyf) {
      try {
        isLoading.value = true;
        error.value = "";

        const payload = {
            userId: user_id,
            ...applicant
        };

        console.log("Payload being sent:", payload);

        const res = await $fetch("/api/applicant-project", {
          method: "POST",
          body: payload,
        });

        if (!res.success) throw new Error(res.error);

        applicant.value = res.project; // save updated result from DB

        console.log('applicant data', applicant);
        
        notyf.success("Saved successfully!");

        isStepProfileComplete.value = true;

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

    return {
      // states returned
      selectedCountry,
      applicant,
      isLoading,
      error,
      isStepProfileComplete,

      // actions returned
      countriesOptions,
      updateApplicant,
      fetchApplicant,
    };
})