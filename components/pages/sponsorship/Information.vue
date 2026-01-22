<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading 
            title="Sponsor Infos"
            description="Complete the following information concerning sponsorship"/>
                
            <form @submit.prevent="submitSponsorInfo" class="my-4 space-y-6">
                <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">
                 <CommonInputsVariant class="lg:w-2/3 w-full"
                    type="text"
                    label="Lead Sponsor/Company Name"
                    placeholder="MTN"
                    v-model="sponsor"
                    :hasError="!!sponsorError"
                    :errorMessage="sponsorError"
                />

                 <CommonInputsVariant class="lg:w-1/3 w-full"
                    type="text"
                    label="Registration Number"
                    placeholder="HSNIW12N3J4"
                    v-model="regnumber"
                    :hasError="!!regnumberError"
                    :errorMessage="regnumberError"
                />
                </div>

                <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">
                    <CommonSelectVariant class="lg:w-1/2 w-full"
                        label="Country of Incorporation"
                        :options="profileStore.countriesOptions"
                        v-model="countryOfIncorporation"
                        :hasError="!!countryOfIncorporationError"
                        :errorMessage="countryOfIncorporationError"
                    />

                    <CommonDateInput class="lg:w-1/2 w-full"
                       v-model="dateOfIncorporation"
                        label="Date of Incorporation"
                        placeholder="Select your date of Incorporation"
                        :options="{
                            maxDate: new Date(),
                            dateFormat: 'd-m-Y'
                        }"
                        :hasError="!!dateOfIncorporationError"
                        :errorMessage="dateOfIncorporationError"
                    />
                </div>

                <div class="text-base">Legal structure</div>
                    
                <CommonRadiaButton class="max-lg:mb-14"
                    v-model="legalStructure"
                    :options="legalStructureOptions"
                    :hasError="!!legalStructureError"
                    :errorMessage="legalStructureError"
                />

                <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
                  <button 
                    type="submit" :disabled="hasValidationErrors"
                    class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-1"
                        > 
                    <span v-if="stepStore.isLoading" class="loading loading-spinner"></span>
                    {{ stepStore.isLoading ? 'Saving...' : 'Save & Continue' }}
                    <span class="icon-[tabler--chevron-right] size-5"></span>
                  </button>
                </div>
            </form>
    </div>
</template>

<script setup>
import { sponsorInfoSchema } from '~/validation/sponsorshipSchema';
import { legalStructure as legalStructureOptions } from "/assets/data/data";
import { useStepStore } from '@/stores/useStepStore';
import { useForm, useField } from "vee-validate";
import { useProfileStore } from '@/stores/profileStore';


const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();
const profileStore = useProfileStore();
const { $notyf } = useNuxtApp();

const { handleSubmit, errors, setValues } = useForm({
    validationSchema: sponsorInfoSchema,
});

// Use useField for each form field
const { value: sponsor, errorMessage: sponsorError } = useField('sponsor')
const { value: regnumber, errorMessage: regnumberError } = useField('regnumber')
const { value: countryOfIncorporation, errorMessage: countryOfIncorporationError } = useField('countryOfIncorporation')
const { value: dateOfIncorporation, errorMessage: dateOfIncorporationError } = useField('dateOfIncorporation')
const { value: legalStructure, errorMessage: legalStructureError } = useField('legalStructure')

const hasValidationErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
    await checkAuth();
    
    try {
        if (projectId.value) {
            await stepStore.fetchStep('sponsorship', projectId.value);

            // Populate form with persisted store data
            if (stepStore.state?.sponsorInfo) {
                setValues({
                    sponsor: stepStore.state?.sponsorInfo.sponsor || '',
                    regnumber: stepStore.state?.sponsorInfo.regnumber || '',
                    countryOfIncorporation: stepStore.state?.sponsorInfo.countryOfIncorporation || '',
                    dateOfIncorporation: stepStore.state?.sponsorInfo.dateOfIncorporation || '',
                    legalStructure: stepStore.state?.sponsorInfo.legalStructure || ''
                });
            }
        }
    } catch (error) {
        console.error('Failed to load sponsorship data:', error);
    }
});

const submitSponsorInfo = handleSubmit(async (values) => {
    await checkAuth();
    
    try {
        if (!projectId.value) {
            $notyf.error('No project found');
            return;
        }

        await stepStore.saveSection(
            'sponsorship',
            'sponsorInfo',
            values,
            userId.value,
            projectId.value,
        );
        
        $notyf.success('Sponsor information saved successfully!');
        navigateTo('sponsor-business-history');
    } catch (error) {
        $notyf.error('Failed to save sponsor information');
    }
});
</script>