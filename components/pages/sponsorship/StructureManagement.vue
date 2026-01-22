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

      <div
        class="lg:flex max-lg:flex-col items-center gap-4 w-full mt-12 max-lg:mb-20"
      >
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

      <div class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2">
        <button
          type="submit"
          :disabled="hasValidationErrors"
          class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-1"
        >
          <span
            v-if="stepStore.isLoading"
            class="loading loading-spinner"
          ></span>
          {{ stepStore.isLoading ? "Saving..." : "Save & Continue" }}
          <span class="icon-[tabler--chevron-right] size-5"></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { managementStructureSchema } from "~/validation/formValidationSchema";
import { educationDegree, yearExperience } from "/assets/data/data";
import { useStepStore } from "@/stores/useStepStore";
import { useForm, useField } from "vee-validate";

const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();
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

const hasValidationErrors = computed(() => {
  return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth();

  try {
    if (projectId.value) {
      await stepStore.fetchStep("sponsorship", projectId.value);

      console.log("Sponsorship management structure:", stepStore.state);

      if (stepStore.state?.managementStructure) {
        setValues({
          structureManagementDesc:
            stepStore.state?.managementStructure.structureManagementDesc || "",
          ceoName: stepStore.state?.managementStructure.ceo?.name || "",
          ceoYearExperience:
            stepStore.state?.managementStructure.ceo?.yearExperience || "",
          ceoPreviousPosition:
            stepStore.state?.managementStructure.ceo?.previousPosition || "",
          ceoEducationDegree:
            stepStore.state?.managementStructure.ceo?.educationDegree || "",
          cfoName: stepStore.state?.managementStructure.cfo?.name || "",
          cfoYearExperience:
            stepStore.state?.managementStructure.cfo?.yearExperience || "",
          cfoPreviousPosition:
            stepStore.state?.managementStructure.cfo?.previousPosition || "",
          cfoEducationDegree:
            stepStore.state?.managementStructure.cfo?.educationDegree || "",
          ctoName: stepStore.state?.managementStructure.cto?.name || "",
          ctoYearExperience:
            stepStore.state?.managementStructure.cto?.yearExperience || "",
          ctoPreviousPosition:
            stepStore.state?.managementStructure.cto?.previousPosition || "",
          ctoEducationDegree:
            stepStore.state?.managementStructure.cto?.educationDegree || "",
        });
      }
    }
  } catch (error) {
    console.error("Failed to load management structure data:", error);
  }
});

const submitManagementStructure = handleSubmit(async (values) => {
  await checkAuth();

  try {
    if (!projectId.value) {
      $notyf.error("No project found");
      return;
    }

    // Prepare data in the nested structure
    const managementStructureData = {
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
    };

    await stepStore.saveSection(
      "sponsorship",
      "managementStructure",
      managementStructureData,
      userId.value,
      projectId.value
    );

    $notyf.success("Management structure saved successfully!");
    navigateTo("technical-assistance");
  } catch (error) {
    $notyf.error("Failed to save management structure");
  }
});
</script>
