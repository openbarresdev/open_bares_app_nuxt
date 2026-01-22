<template>
  <div>
    <CommonPageHeading
      title="Technical Assistance"
      description="Description of technical arrangements and external assistance required"
    />

    <div class="lg:flex max-lg:flex-col items-center gap-4 w-full">
      <form @submit.prevent="submitTechnicalAssistance" class="mt-8 w-full">
        <div class="space-y-6 mx-1 lg:w-1/2 max-lg:w-full">
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Management Assistance
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Management Assistance"
              placeholder="Describe management assistance needed"
              v-model="managementAssist"
              :hasError="!!managementAssistError"
              :errorMessage="managementAssistError"
            />
          </div>

          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Production Assistance
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Production Assistance"
              placeholder="Describe production assistance needed"
              v-model="productionAssist"
              :hasError="!!productionAssistError"
              :errorMessage="productionAssistError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Marketing Assistance
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Marketing Assistance"
              placeholder="Describe marketing assistance needed"
              v-model="marketingAssist"
              :hasError="!!marketingAssistError"
              :errorMessage="marketingAssistError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full">
            <div class="lg:text-base max-lg:text-sm w-1/2">
              Financial Assistance
            </div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Financial Assistance"
              placeholder="Describe financial assistance needed"
              v-model="financialAssist"
              :hasError="!!financialAssistError"
              :errorMessage="financialAssistError"
            />
          </div>
          <div class="inline-flex items-center gap-2 w-full max-lg:mb-20">
            <div class="lg:text-base max-lg:text-sm w-1/2">Others</div>
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Others"
              placeholder="Any other assistance needed"
              v-model="others"
              :hasError="!!othersError"
              :errorMessage="othersError"
            />
          </div>
        </div>

        <div
          class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2"
        >
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
  </div>
</template>

<script setup>
import { technicalAssistanceSchema } from "~/validation/formValidationSchema";
import { useStepStore } from "@/stores/useStepStore";
import { useForm, useField } from "vee-validate";

const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();
const { $notyf } = useNuxtApp();
const nextPage = usePageNav();

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: technicalAssistanceSchema,
});

// Use useField for each form field
const { value: managementAssist, errorMessage: managementAssistError } =
  useField("managementAssist");
const { value: productionAssist, errorMessage: productionAssistError } =
  useField("productionAssist");
const { value: marketingAssist, errorMessage: marketingAssistError } =
  useField("marketingAssist");
const { value: financialAssist, errorMessage: financialAssistError } =
  useField("financialAssist");
const { value: others, errorMessage: othersError } = useField("others");

const hasValidationErrors = computed(() => {
  return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth();

  try {
    if (projectId.value) {
      await stepStore.fetchStep("sponsorship", projectId.value);

      console.log("Sponsorship technical assistance:", stepStore.state);

      if (stepStore.state?.technicalAssistance) {
        setValues({
          managementAssist:
            stepStore.state?.technicalAssistance.managementAssist || "",
          productionAssist:
            stepStore.state?.technicalAssistance.productionAssist || "",
          marketingAssist:
            stepStore.state?.technicalAssistance.marketingAssist || "",
          financialAssist:
            stepStore.state?.technicalAssistance.financialAssist || "",
          others: stepStore.state?.technicalAssistance.others || "",
        });
      }
    }
  } catch (error) {
    console.error("Failed to load technical assistance data:", error);
  }
});

const submitTechnicalAssistance = handleSubmit(async (values) => {
  await checkAuth();

  try {
    if (!projectId.value) {
      $notyf.error("No project found");
      return;
    }

    await stepStore.saveSection(
      "sponsorship",
      "technicalAssistance",
      values,
      userId.value,
      projectId.value
    );

    $notyf.success("Technical assistance saved successfully!");

    // Navigate to next section (market/production-and-sales-projections)
    nextPage.goToNextPage("market/production-and-sales-projections");
  } catch (error) {
    $notyf.error("Failed to save technical assistance");
  }
});
</script>
