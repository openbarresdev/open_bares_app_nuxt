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
            console.error( 'Failed to load resource', error)
            // console.log( 'Failed with error:', error)
        }
    })


    return {
        // states returned
        selectedCountry,
        applicant,
        isStepProfileComplete,
        
        // actions returned
        countriesOptions,
    }
})