<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading 
            title="Your Profile"/>
        
            <div class="flex max-lg:flex-col lg:gap-4 lg:items-center my-4 px-2 py-4 text-white bg-primary/60 rounded-md">
                <h2 class="lg:min-w-44">Application status</h2> 
                <div class="flex items-center gap-3 justify-between w-full max-lg:mb-2">
                    <!-- Progress bar -->
                    <div class="progress h-4 w-full" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar w-1/4 font-normal">25%</div>
                    </div>
                    <div class="font-bold">
                        25%
                    </div>
                </div>
                <div class="btn btn-xl rounded-xl btn-neutral btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-10">Continuer</div>
            </div>
            
            <!-- Resume of your application -->
            <div class="mt-10"> 
                <CommonPageHeading 
                    title="Start your application"
                    description="Complete the following information"/>

                <form @submit.prevent="submitProfile" class="my-4 space-y-6">
                    <div class="grid grid-cols-8 w-full gap-3">
                        <div class="col-span-6">
                            <CommonInputsVariant
                                type="text"
                                label="Applicant name"
                                placeholder="John Tailor"
                                v-model = "applicantName"
                            />
                            <span v-if="applicantNameError" class="text-red-500 text-[0.85rem]">{{ errors.applicantName }}</span>
                        </div>
                        <div class="col-span-2">
                                <CommonSelectVariant
                                label="Title"
                                :options="titles"
                                v-model="applicantTitle"/>
                            <span v-if="applicantTitleError" class="text-red-500 text-[0.85rem]">{{ errors.applicantTitle }}</span>
                        </div>
                    </div>

                    <CommonInputsVariant
                            type="text"
                            label="Company name"
                            placeholder="Crownhill Funding"
                            v-model = "companyName"
                        />
                    <span v-if="companyNameError" class="text-red-500 text-[0.85rem]">{{ errors.companyName }}</span>


                    <CommonSelectVariant
                        label="Country or Territory"
                        :options="profileStore.countriesOptions"
                        v-model="country"/>
                    <span v-if="countryError" class="text-red-500 text-[0.85rem]">{{ errors.country }}</span>


                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-4">

                        <CommonInputsVariant class="max-lg:w-full w-1/2"
                            type="text"
                            label="City"
                            placeholder="Yaounde"
                            v-model = "city"
                        />
                        <span v-if="cityError" class="text-red-500 text-[0.85rem]">{{ errors.city }}</span>

                        <CommonInputsVariant class="max-lg:w-full w-1/2"
                            type="text"
                            label="State"
                            placeholder="Center"
                            v-model = "state"
                        />
                        <span v-if="stateError" class="text-red-500 text-[0.85rem]">{{ errors.state }}</span>

                    </div>


                    <CommonPageHeading class="mt-8"
                        title="Project Description"
                        description="Complete the following information concerning your project to be sponsored"
                        
                        />
                
                    <!-- <form action="" class="my-4 space-y-6"> -->
                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">
                        <CommonSelectVariant
                            label="Project type"
                            :options="options"
                            v-model = "projectType"/>
                        <span v-if="projectTypeError" class="text-red-500 text-[0.85rem]">{{ errors.projectType }}</span>
                        

                        <CommonSelectVariant
                            label="Industrial sector"
                            :options="sectors"
                            v-model = "industrialSector"/>
                        <span v-if="industrialSectorError" class="text-red-500 text-[0.85rem]">{{ errors.industrialSector }}</span>
                        
                    </div>

                     <CommonTextArea 
                        label="Project description"
                        :rows="3"
                        placeholder="Provide description of your project"
                        v-model = "projectDescription"
                        />
                        <span v-if="projectDescriptionError" class="text-red-500 text-[0.85rem]">{{ errors.projectDescription }}</span>


                        
                    <button type="submit" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-12">Submit</button>
                    <!-- </form> -->
                </form>
            </div>
    </div>
</template>

<script setup>
import { titles, industries, sectors, options } from "/assets/data/data";
import { useProfileStore } from '@/stores/profileStore'
import { profileSchema } from "~/validation/profileSchema";
import { useForm, useField } from "vee-validate";

const { userId, isAuthenticated, checkAuth } = useAuth();
const profileStore = useProfileStore();
const { $notyf } = useNuxtApp();

const { handleSubmit, errors } = useForm({
    validationSchema: profileSchema,
    initialValues: {
        applicantName: profileStore.applicant.applicantName,
        applicantTitle: profileStore.applicant.applicantTitle,
        companyName: profileStore.applicant.companyName,
        country: profileStore.applicant.country,
        city: profileStore.applicant.city,
        state: profileStore.applicant.state,
        projectType: profileStore.applicant.projectType,
        industrialSector: profileStore.applicant.industrialSector,
        projectDescription: profileStore.applicant.projectDescription,
    }
});

const { value: applicantName, errorMessage: applicantNameError } = useField('applicantName')
const { value: applicantTitle, errorMessage: applicantTitleError } = useField('applicantTitle')
const { value: companyName, errorMessage: companyNameError } = useField('companyName')
const { value: country, errorMessage: countryError } = useField('country')
const { value: city, errorMessage: cityError } = useField('city')
const { value: state, errorMessage: stateError } = useField('state')
const { value: projectType, errorMessage: projectTypeError } = useField('projectType')
const { value: industrialSector, errorMessage: industrialSectorError } = useField('industrialSector')
const { value: projectDescription, errorMessage: projectDescriptionError } = useField('projectDescription')

await checkAuth();
// ProfileStore.applicant.userId = userId.value;

const submitProfile = handleSubmit((values) => {
    // profileStore.applicant.userId = userId.value;
    // values = values
    profileStore.updateApplicant(values, userId.value, $notyf);
});
</script>