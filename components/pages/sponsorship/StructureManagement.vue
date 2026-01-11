<template>
  <div>
    <CommonPageHeading
      title="Structure Management"
      description="Proposed management arrangements for the project"
    />

    <form @submit.prevent="submitManagementStructure" class="space-y-6">
      <CommonTextArea
        class="mt-4"
        label="Proposed structure management"
        :rows="5"
        placeholder="Provide the Proposed structure management"
        v-model="structureManagementDesc"
        :hasError="!!structureManagementDescError"
        :errorMessage="structureManagementDescError"
      />

      <div class="text-base font-medium text-black p-1">
        Key Management Personnel
      </div>

      <div class="lg:flex max-lg:flex-col items-center gap-4 w-full">
        <!-- CEO Section -->
        <div class="space-y-6 mx-1 lg:w-1/2 max-lg:w-full">
          <p class="lg:text-base max-lg:text-sm mb-8">
            Chief Executive Officer/General Manager
          </p>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Name</div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="CEO Name"
              placeholder="John Wick"
              v-model="ceoName"
              :hasError="!!ceoNameError"
              :errorMessage="ceoNameError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Experience</div>
            <CommonSelectVariant
              class="w-full"
              label="Years of Experience"
              :options="yearExperience"
              v-model="ceoYearExperience"
              :hasError="!!ceoYearExperienceError"
              :errorMessage="ceoYearExperienceError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Previous relevant positions
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Previous position"
              placeholder="Manager"
              v-model="ceoPreviousPosition"
              :hasError="!!ceoPreviousPositionError"
              :errorMessage="ceoPreviousPositionError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Education</div>
            <CommonSelectVariant
              class="w-full"
              label="Education Degree"
              :options="educationDegree"
              v-model="ceoEducationDegree"
              :hasError="!!ceoEducationDegreeError"
              :errorMessage="ceoEducationDegreeError"
            />
          </div>
        </div>

        <!-- CFO Section -->
        <div class="space-y-6 mx-1 lg:w-1/2 max-lg:w-full max-lg:mt-12">
          <p class="lg:text-base max-lg:text-sm mb-8">
            Chief Financial Officer
          </p>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Name</div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="CFO Name"
              placeholder="Jane Doe"
              v-model="cfoName"
              :hasError="!!cfoNameError"
              :errorMessage="cfoNameError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Experience</div>
            <CommonSelectVariant
              class="w-full"
              label="Years of Experience"
              :options="yearExperience"
              v-model="cfoYearExperience"
              :hasError="!!cfoYearExperienceError"
              :errorMessage="cfoYearExperienceError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Previous relevant positions
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Previous position"
              placeholder="Financial Manager"
              v-model="cfoPreviousPosition"
              :hasError="!!cfoPreviousPositionError"
              :errorMessage="cfoPreviousPositionError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Education</div>
            <CommonSelectVariant
              class="w-full"
              label="Education Degree"
              :options="educationDegree"
              v-model="cfoEducationDegree"
              :hasError="!!cfoEducationDegreeError"
              :errorMessage="cfoEducationDegreeError"
            />
          </div>
        </div>
      </div>

      <div class="lg:flex max-lg:flex-col items-center gap-4 w-full mt-12">
        <!-- CTO Section -->
        <div class="space-y-6 mx-1 lg:w-1/2 max-lg:w-full">
          <p class="lg:text-base max-lg:text-sm mb-8">
            Chief Technical Officer/Operations Manager
          </p>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Name</div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="CTO Name"
              placeholder="Alex Johnson"
              v-model="ctoName"
              :hasError="!!ctoNameError"
              :errorMessage="ctoNameError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Experience</div>
            <CommonSelectVariant
              class="w-full"
              label="Years of Experience"
              :options="yearExperience"
              v-model="ctoYearExperience"
              :hasError="!!ctoYearExperienceError"
              :errorMessage="ctoYearExperienceError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Previous relevant positions
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Previous position"
              placeholder="Technical Lead"
              v-model="ctoPreviousPosition"
              :hasError="!!ctoPreviousPositionError"
              :errorMessage="ctoPreviousPositionError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">Education</div>
            <CommonSelectVariant
              class="w-full"
              label="Education Degree"
              :options="educationDegree"
              v-model="ctoEducationDegree"
              :hasError="!!ctoEducationDegreeError"
              :errorMessage="ctoEducationDegreeError"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3"
        :disabled="sponsorshipStore.isLoading"
      >
        <span
          v-if="sponsorshipStore.isLoading"
          class="loading loading-spinner"
        ></span>
        {{ sponsorshipStore.isLoading ? "Saving..." : "Save & Continue" }}
        <span class="icon-[tabler--chevron-right] size-5"></span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { managementStructureSchema } from "~/validation/formValidationSchema";
import { educationDegree, yearExperience } from "/assets/data/data";
import { useSponsorshipStore } from "@/stores/sponsorshipStore";
import { useProfileStore } from "@/stores/profileStore";
import { useForm, useField } from "vee-validate";

const { userId, checkAuth } = useAuth();
const sponsorshipStore = useSponsorshipStore();
const profileStore = useProfileStore();
const { $notyf } = useNuxtApp();

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: managementStructureSchema,
});

// Use useField for each form field
const {
  value: structureManagementDesc,
  errorMessage: structureManagementDescError,
} = useField("structureManagementDesc");
const { value: ceoName, errorMessage: ceoNameError } = useField("ceoName");
const { value: ceoYearExperience, errorMessage: ceoYearExperienceError } =
  useField("ceoYearExperience");
const { value: ceoPreviousPosition, errorMessage: ceoPreviousPositionError } =
  useField("ceoPreviousPosition");
const { value: ceoEducationDegree, errorMessage: ceoEducationDegreeError } =
  useField("ceoEducationDegree");
const { value: cfoName, errorMessage: cfoNameError } = useField("cfoName");
const { value: cfoYearExperience, errorMessage: cfoYearExperienceError } =
  useField("cfoYearExperience");
const { value: cfoPreviousPosition, errorMessage: cfoPreviousPositionError } =
  useField("cfoPreviousPosition");
const { value: cfoEducationDegree, errorMessage: cfoEducationDegreeError } =
  useField("cfoEducationDegree");
const { value: ctoName, errorMessage: ctoNameError } = useField("ctoName");
const { value: ctoYearExperience, errorMessage: ctoYearExperienceError } =
  useField("ctoYearExperience");
const { value: ctoPreviousPosition, errorMessage: ctoPreviousPositionError } =
  useField("ctoPreviousPosition");
const { value: ctoEducationDegree, errorMessage: ctoEducationDegreeError } =
  useField("ctoEducationDegree");

onMounted(async () => {
  await checkAuth();

  try {
    // Get projectId from profile store
    await profileStore.getProjectId(userId.value);

    if (profileStore.projectId) {
      await sponsorshipStore.fetchSponsorship(profileStore.projectId);

      console.log(
        "Sponsorship management structure:",
        sponsorshipStore.sponsorship
      );

      if (sponsorshipStore.sponsorship?.managementStructure) {
        try {
          const parsedData = sponsorshipStore.sponsorship.managementStructure;
          setValues({
            structureManagementDesc: parsedData.structureManagementDesc || "",
            ceoName: parsedData.ceo?.name || "",
            ceoYearExperience: parsedData.ceo?.yearExperience || "",
            ceoPreviousPosition: parsedData.ceo?.previousPosition || "",
            ceoEducationDegree: parsedData.ceo?.educationDegree || "",
            cfoName: parsedData.cfo?.name || "",
            cfoYearExperience: parsedData.cfo?.yearExperience || "",
            cfoPreviousPosition: parsedData.cfo?.previousPosition || "",
            cfoEducationDegree: parsedData.cfo?.educationDegree || "",
            ctoName: parsedData.cto?.name || "",
            ctoYearExperience: parsedData.cto?.yearExperience || "",
            ctoPreviousPosition: parsedData.cto?.previousPosition || "",
            ctoEducationDegree: parsedData.cto?.educationDegree || "",
          });
        } catch (error) {
          console.error("Failed to parsed data:", error);
          // If parsing fails, set empty values
          // setValues({
          //     structureManagementDesc: '',
          //     ceoName: '',
          //     ceoYearExperience: '',
          //     ceoPreviousPosition: '',
          //     ceoEducationDegree: '',
          //     cfoName: '',
          //     cfoYearExperience: '',
          //     cfoPreviousPosition: '',
          //     cfoEducationDegree: '',
          //     ctoName: '',
          //     ctoYearExperience: '',
          //     ctoPreviousPosition: '',
          //     ctoEducationDegree: '',
          // });
        }
      }
    }
  } catch (error) {
    console.error("Failed to load management structure data:", error);
  }
});

const submitManagementStructure = handleSubmit(async (values) => {
  await profileStore.getProjectId(userId.value);

  try {
    if (!profileStore.projectId) {
      $notyf.error("No project found");
      return;
    }

    // Prepare data in the nested structure for database
    const managementStructureData = {
      // managementStructure: {
      structureManagementDesc: values.structureManagementDesc,
      ceo: {
        name: values.ceoName,
        yearExperience: values.ceoYearExperience,
        previousPosition: values.ceoPreviousPosition,
        educationDegree: values.ceoEducationDegree,
      },
      cfo: {
        name: values.cfoName,
        yearExperience: values.cfoYearExperience,
        previousPosition: values.cfoPreviousPosition,
        educationDegree: values.cfoEducationDegree,
      },
      cto: {
        name: values.ctoName,
        yearExperience: values.ctoYearExperience,
        previousPosition: values.ctoPreviousPosition,
        educationDegree: values.ctoEducationDegree,
      },
      // }
    };

    // console.log('Management structure data:', managementStructureData);

    await sponsorshipStore.saveSponsorshipSection(
      profileStore.projectId,
      "managementStructure",
      managementStructureData
    );

    $notyf.success("Management structure saved successfully!");
    navigateTo("technical-assistance");
  } catch (error) {
    $notyf.error("Failed to save management structure");
  }
});
</script>
