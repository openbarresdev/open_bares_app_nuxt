<template>
  <div class="lg:max-w-2xl m-1">
    <CommonPageHeading
      title="Sponsor Business History"
      description="Brief history and current business activities of sponsors"
    />

    <form @submit.prevent="submitBusinessHistory" class="space-y-3">
      <CommonTextArea
        class="mt-4"
        label="Business description"
        :rows="5"
        placeholder="Provide your business description"
        v-model="projectDescription"
        :hasError="!!projectDescriptionError"
        :errorMessage="projectDescriptionError"
      />

      <div class="text-base font-medium text-black">
        Annual Revenue (Last 3 Years):
      </div>
      <div class="space-y-4 w-2/3 max-lg:w-full mt-8 max-lg:mb-20">
        <div class="inline-flex items-center gap-2 w-full">
          <div class="lg:text-base max-lg:text-sm min-w-32">Currency:</div>
          <CommonSelectVariant
            class="w-full"
            label="Currency Eg. $"
            :options="currencies"
            v-model="currency"
            :hasError="!!currencyError"
            :errorMessage="currencyError"
          />
        </div>

        <div class="inline-flex items-center gap-2 w-full">
          <div class="lg:text-base max-lg:text-sm min-w-32">Year 1:</div>
          <CommonInputsVariant
            class="w-full"
            type="text"
            label="First year revenue"
            placeholder="0,00"
            v-model="firstYearRevenue"
            :hasError="!!firstYearRevenueError"
            :errorMessage="firstYearRevenueError"
          />
        </div>
        <div class="inline-flex items-center gap-2 w-full">
          <div class="lg:text-base max-lg:text-sm min-w-32">Year 2:</div>
          <CommonInputsVariant
            class="w-full"
            type="text"
            label="Second year revenue"
            placeholder="0,00"
            v-model="secondYearRevenue"
            :hasError="!!secondYearRevenueError"
            :errorMessage="secondYearRevenueError"
          />
        </div>
        <div class="inline-flex items-center gap-2 w-full">
          <div class="lg:text-base max-lg:text-sm min-w-32">Year 3:</div>
          <CommonInputsVariant
            class="w-full"
            type="text"
            label="Third year revenue"
            placeholder="0,00"
            v-model="thirdYearRevenue"
            :hasError="!!thirdYearRevenueError"
            :errorMessage="thirdYearRevenueError"
          />
        </div>

        <div class="mt-6 space-y-2">
          <p class="lg:text-base max-lg:text-sm p-1">Total Assets</p>
          <div class="inline-flex items-center gap-2 w-full">
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Total assets"
              placeholder="0,00"
              v-model="totalAssets"
              :hasError="!!totalAssetsError"
              :errorMessage="totalAssetsError"
            />
          </div>

          <p class="lg:text-base max-lg:text-sm p-1">Net worth</p>
          <div class="inline-flex items-center gap-2 w-full">
            <CommonInputsVariant
              class="w-full"
              type="text"
              label="Net worth"
              placeholder="0,00"
              v-model="netWorth"
              :hasError="!!netWorthError"
              :errorMessage="netWorthError"
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
import { businessHistorySchema } from "~/validation/formValidationSchema";
import { currencies } from "/assets/data/data";
import { useDataStore } from "~/stores/dataStore";
import { useStepStore } from "@/stores/useStepStore";
import { useForm, useField } from "vee-validate";

const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();
const dataStore = useDataStore();
const { $notyf } = useNuxtApp();

const { handleSubmit, errors, setValues } = useForm({
  validationSchema: businessHistorySchema,
});

// Use useField for each form field
const { value: projectDescription, errorMessage: projectDescriptionError } =
  useField("projectDescription");
const { value: currency, errorMessage: currencyError } = useField("currency");
const { value: firstYearRevenue, errorMessage: firstYearRevenueError } =
  useField("firstYearRevenue");
const { value: secondYearRevenue, errorMessage: secondYearRevenueError } =
  useField("secondYearRevenue");
const { value: thirdYearRevenue, errorMessage: thirdYearRevenueError } =
  useField("thirdYearRevenue");
const { value: totalAssets, errorMessage: totalAssetsError } =
  useField("totalAssets");
const { value: netWorth, errorMessage: netWorthError } = useField("netWorth");

const hasValidationErrors = computed(() => {
  return Object.keys(errors.value).length > 0;
});

onMounted(async () => {
  await checkAuth();

  try {
    if (projectId.value) {
      await stepStore.fetchStep("sponsorship", projectId.value);

      if (userId.value) {
        await dataStore.loadSteps(userId.value, projectId.value);
        setValues({
          currency: dataStore.preferences.currency || "",
        });
      }

      if (stepStore.state?.sponsorBusinessHist) {
        setValues({
          // currency: stepStore.state?.sponsorBusinessHist.currency || "",
          projectDescription:
            stepStore.state?.sponsorBusinessHist.projectDescription || "",
          firstYearRevenue:
            stepStore.state?.sponsorBusinessHist.firstYearRevenue || "",
          secondYearRevenue:
            stepStore.state?.sponsorBusinessHist.secondYearRevenue || "",
          thirdYearRevenue:
            stepStore.state?.sponsorBusinessHist.thirdYearRevenue || "",
          totalAssets: stepStore.state?.sponsorBusinessHist.totalAssets || "",
          netWorth: stepStore.state?.sponsorBusinessHist.netWorth || "",
        });
      }
    }
  } catch (error) {
    console.error("Failed to load business history data:", error);
  }
});

const submitBusinessHistory = handleSubmit(async (values) => {
  await checkAuth();

  try {
    if (!projectId.value) {
      $notyf.error("No project found");
      return;
    }

    await stepStore.saveSection(
      "sponsorship",
      "sponsorBusinessHist",
      values,
      userId.value,
      projectId.value
    );

    $notyf.success("Business history saved successfully!");
    navigateTo("management-structure");
  } catch (error) {
    $notyf.error("Failed to save business history");
  }
});
</script>
