import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore('profileStore', () => {
    
    // states here
    const selectedCountry = ref('');
    const countries = ref([]);
    const applicant = ref({
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

    // POST
    const handleSubmitProfile = (values) => {

      if (isStepProfileComplete) {
        // navigateTo('/user/dashboard/sponsorship/sponsor-information')
        return;
      } else {
        console.log("Applicant form", values);
        console.log("Complete all form");
      }
    };

    // FETCH
    async function fetchApplicant() {
    //   try {
    //     isLoading.value = true;
    //     error.value = "";

    //     const res = await $fetch("/api/applicant");
    //     applicant.value = res;
    //   } catch (err) {
    //     error.value = "Failed to load applicant data";
    //     console.error(err);
    //   } finally {
    //     isLoading.value = false;
    //   }
    }


    // PUT
    async function updateApplicant(applicant, notyf) {
      try {
        isLoading.value = true;
        error.value = "";

        const res = await $fetch("/api/applicant", {
          method: "PUT",
          body: data,
        });

        applicant.value = res;
        notyf.success("Login successful! Redirecting...");
        setTimeout(() => {
          navigateTo("/");
        }, 3000);
          isStepProfileComplete.value = true;
      } catch (err) {
        error.value = "Failed to update applicant";
        //   console.error(err);
          notyf.success(error);
          setTimeout(() => {
            navigateTo("/");
          }, 3000);
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
      handleSubmitProfile,
      updateApplicant,
      fetchApplicant,
    };
})