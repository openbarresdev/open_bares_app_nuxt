<template>
    <div class="lg:max-w-2xl m-1">
        <CommonPageHeading 
            title="Your Profile"/>
        
            <CommonApplicationStatus />
            
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
                                :hasError="applicantNameError"
                                :errorMessage="errors.applicantName"
                            />
                        </div>

                        <div class="col-span-2">
                                <CommonSelectVariant
                                label="Title"
                                :options="titles"
                                v-model="applicantTitle"
                                :hasError="applicantTitleError"
                                :errorMessage="errors.applicantTitle"
                                />
                        </div>
                    </div>

                    <div>
                        <CommonInputsVariant
                                type="text"
                                label="Company name"
                                placeholder="Crownhill Funding"
                                v-model = "companyName"
                                :hasError="companyNameError"
                                :errorMessage="errors.companyName"
                                :hasRequired="true"
                            />
                    </div>


                    <div>
                        <CommonSelectVariant
                            label="Country or Territory"
                            :options="profileStore.countriesOptions"
                            v-model="country"/>
                        <span v-if="countryError" class="text-red-500 text-[0.85rem]">{{ errors.country }}</span>
                    </div>


                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-4 w-full">

                        <div class="max-lg:w-full w-1/2">
                            <CommonInputsVariant 
                                type="text"
                                label="City"
                                placeholder="Yaounde"
                                v-model = "city"
                                :hasError="cityError"
                                :errorMessage="errors.city"
                            />
                        </div>
                         <div class="max-lg:w-full w-1/2">
                            
                             <CommonInputsVariant
                                 type="text"
                                 label="State"
                                 placeholder="Center"
                                 v-model = "state"
                                 :hasError="stateError"
                                 :errorMessage="errors.state"
                             />
                        </div>
                    </div>


                    <CommonPageHeading class="mt-8"
                        title="Project Description"
                        description="Complete the following information concerning your project to be sponsored"
                        
                        />
                
                    <!-- <form action="" class="my-4 space-y-6"> -->
                    <div class="flex flex-col lg:flex-row items-center lg:gap-3 max-lg:space-y-6">
                        
                         <div class="max-lg:w-full w-1/2">
                             <CommonSelectVariant
                                 label="Project type"
                                 :options="options"
                                 v-model = "projectType"
                                 :hasError="projectTypeError"
                                 :errorMessage="errors.projectType"
                                 />
                         </div>
                        
                        <div class="max-lg:w-full w-1/2">
                            <CommonSelectVariant
                                label="Industrial sector"
                                :options="sectors"
                                v-model = "industrialSector"
                                :hasError="industrialSectorError"
                                :errorMessage="errors.industrialSector"
                                />
                         </div>
                    </div>

                     <CommonTextArea 
                        label="Project description"
                        :rows="3"
                        placeholder="Provide description of your project"
                        v-model = "projectDescription"
                        :hasError="projectDescriptionError"
                        :errorMessage="errors.projectDescription"
                        />
                        
                    <button type="submit" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-40 lg:h-12">Submit</button>
                </form>
            </div>
    </div>
</template>

<script setup>
import { titles, industries, sectors, options } from "/assets/data/data";
import { useProfileStore } from '@/stores/profileStore'
import { profileSchema } from "~/validation/profileSchema";
import { useForm, useField } from "vee-validate";
// import { useDataStore } from "#imports";

// const dataStore = useDataStore();
const { userId, projectId, isAuthenticated, checkAuth } = useAuth();
const profileStore = useProfileStore();
const { $notyf } = useNuxtApp();

const { handleSubmit, errors, setValues } = useForm({
    validationSchema: profileSchema,
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

onMounted(async () => {
    await checkAuth();

    try {
        await profileStore.fetchApplicant(userId)

        console.log('profileStore applicant', profileStore.applicant.project);
        
        if (profileStore.applicant?.project) {
            // console.log('profileStore.applicant proj', profileStore.applicant.project)
            setValues({
                applicantName: profileStore.applicant.project.applicantName || '',
                applicantTitle: profileStore.applicant.project.applicantTitle || '',
                companyName: profileStore.applicant.project.companyName || '',
                country: profileStore.applicant.project.country || '',
                city: profileStore.applicant.project.city || '',
                state: profileStore.applicant.project.state || '',
                projectType: profileStore.applicant.project.projectType || '',
                industrialSector: profileStore.applicant.project.industrialSector || '',
                projectDescription: profileStore.applicant.project.projectDescription || '',
            })
        }
    } catch (error) {
            console.error('Failed to load applicant data:', error)
        }
})

const submitProfile = handleSubmit((values) => {
    profileStore.updateApplicant(values, userId.value, projectId.value, $notyf);
});
</script>