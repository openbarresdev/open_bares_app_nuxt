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
                    
                <CommonRadiaButton
                    v-model="legalStructure"
                    :options="legalStructureOptions"
                    :hasError="!!legalStructureError"
                    :errorMessage="legalStructureError"
                />

                <button type="submit" 
                  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12"
                  :disabled="sponsorshipStore.isLoading"
                > 
                  <span v-if="sponsorshipStore.isLoading" class="loading loading-spinner"></span>
                  {{ sponsorshipStore.isLoading ? 'Saving...' : 'Save & Continue' }}
                </button>
            </form>
    </div>
</template>

<script setup>
import { sponsorInfoSchema } from '~/validation/sponsorshipSchema';
import { legalStructure as legalStructureOptions } from "/assets/data/data";
import { useSponsorshipStore } from '@/stores/sponsorshipStore';
import { useProfileStore } from '@/stores/profileStore';
import { useForm, useField } from "vee-validate";

const { userId, checkAuth } = useAuth();
const sponsorshipStore = useSponsorshipStore();
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

onMounted(async () => {
    await checkAuth();
    
    try {
        // Get projectId from profile store
        await profileStore.getProjectId(userId.value);
        
        if (profileStore.projectId) {
            await sponsorshipStore.fetchSponsorship(profileStore.projectId);

            // console.log('Sponsorship info', sponsorshipStore.sponsorship);
            
            // Populate form with persisted store data
            if (sponsorshipStore.sponsorship?.sponsorInfo) {
                setValues({
                    sponsor: sponsorshipStore.sponsorship.sponsorInfo.sponsor || '',
                    regnumber: sponsorshipStore.sponsorship.sponsorInfo.regnumber || '',
                    countryOfIncorporation: sponsorshipStore.sponsorship.sponsorInfo.countryOfIncorporation || '',
                    dateOfIncorporation: sponsorshipStore.sponsorship.sponsorInfo.dateOfIncorporation || '',
                    legalStructure: sponsorshipStore.sponsorship.sponsorInfo.legalStructure || ''
                });
            }
        }
    } catch (error) {
        console.error('Failed to load sponsorship data:', error);
    }
});

const submitSponsorInfo = handleSubmit(async (values) => {
    await profileStore.getProjectId(userId.value);
    
    try {
        if (!profileStore.projectId) {
            $notyf.error('No project found');
            return;
        }

        // Update store with form data
        sponsorshipStore.updateSponsorInfo(values);

        console.log('profileStore.projectId is', profileStore.projectId);
        
        await sponsorshipStore.saveSponsorshipSection(
            profileStore.projectId, 
            'sponsorInfo',
            values
        );
        
        $notyf.success('Sponsor information saved successfully!');
        // navigateTo('/sponsorship/sponsor-business-history');
    } catch (error) {
        $notyf.error('Failed to save sponsor information');
    }
});
</script>