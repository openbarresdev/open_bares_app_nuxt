import { object, string, array, number } from "yup";
import {
  levels,
  currencies,
  plantSizeOptions,
  percentages,
  financeTypeData,
} from "../assets/data/data";

const sponsorInfoSchema = object({
  sponsor: string()
    .min(2, "Sponsor name must be at least 2 characters")
    .max(100, "Sponsor name too long")
    .required("Sponsor name is required"),

  regnumber: string()
    .min(2, "Registration number must be at least 2 characters")
    .max(50, "Registration number too long")
    .required("Registration number is required"),

  countryOfIncorporation: string().required(
    "Country of incorporation is required"
  ),

  dateOfIncorporation: string().required("Date of incorporation is required"),

  legalStructure: string().required("Legal structure is required"),
});

const businessHistorySchema = object({
  projectDescription: string()
    .min(10, 'Business description must be at least 10 characters')
    .max(2000, 'Business description too long')
    .required('Business description is required'),
  
  currency: string()
    .required('Currency is required'),
  
  firstYearRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, 'Please enter a valid amount')
    .required('First year revenue is required'),
  
  secondYearRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, 'Please enter a valid amount')
    .required('Second year revenue is required'),
  
  thirdYearRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, 'Please enter a valid amount')
    .required('Third year revenue is required'),
  
  totalAssets: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, 'Please enter a valid amount')
    .required('Total assets is required'),
  
  netWorth: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, 'Please enter a valid amount')
    .required('Net worth is required')
});

const managementStructureSchema = object({
  structureManagementDesc: string()
    .min(10, "Business description must be at least 10 characters")
    .max(2000, "Business description too long")
    .required("Business description is required"),

  ceoName: string()
    .min(2, "CEO name must be at least 2 characters")
    .required("CEO name is required"),

  ceoYearExperience: string().required("CEO experience is required"),

  ceoPreviousPosition: string()
    .min(2, "Previous position must be at least 2 characters")
    .required("CEO previous position is required"),

  ceoEducationDegree: string().required("CEO education degree is required"),

  cfoName: string()
    .min(2, "CFO name must be at least 2 characters")
    .required("CFO name is required"),

  cfoYearExperience: string().required("CFO experience is required"),

  cfoPreviousPosition: string()
    .min(2, "Previous position must be at least 2 characters")
    .required("CFO previous position is required"),

  cfoEducationDegree: string().required("CFO education degree is required"),

  ctoName: string()
    .min(2, "CTO name must be at least 2 characters")
    .required("CTO name is required"),

  ctoYearExperience: string().required("CTO experience is required"),

  ctoPreviousPosition: string()
    .min(2, "Previous position must be at least 2 characters")
    .required("CTO previous position is required"),

  ctoEducationDegree: string().required("CTO education degree is required"),
});

const technicalAssistanceSchema = object({
  managementAssist: string()
    .min(5, 'Management assistance must be at least 5 characters')
    .max(500, 'Management assistance too long')
    .required('Management assistance is required'),
  
  productionAssist: string()
    .min(5, 'Production assistance must be at least 5 characters')
    .max(500, 'Production assistance too long')
    .required('Production assistance is required'),
  
  marketingAssist: string()
    .min(5, 'Marketing assistance must be at least 5 characters')
    .max(500, 'Marketing assistance too long')
    .required('Marketing assistance is required'),
  
  financialAssist: string()
    .min(5, 'Financial assistance must be at least 5 characters')
    .max(500, 'Financial assistance too long')
    .required('Financial assistance is required'),
  
  others: string()
    .max(500, 'Others field too long')
    .optional()
});


const productionAndSalesSchema = object({
  yearOneProductionVolume: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid Volume")
    .required("Required"),

  yearOneUnitPrice: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .required("Required"),

  yearOneTotalRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .required("Required"),

  yearOneNetProfit: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .required("Required"),

  yearTwoProductionVolume: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearTwoUnitPrice: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearTwoTotalRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearTwoNetProfit: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearThreeProductionVolume: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearThreeUnitPrice: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearThreeTotalRevenue: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),

  yearThreeNetProfit: string()
    .matches(/^[0-9,]+(\.[0-9]{2})?$/, "Please enter a valid value")
    .optional(),
});


const targetMarketSchema = object({
  primaryCustomers: string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description too long")
    .required("Primary user description is required"),

  distributionChannels: string().required("Contribution channel is required"),
});


const marketEnvironmentSchema = object({
  sourceOfSupply: string().required("Source of supply is required"),

  mainCompetitors: string().required("Main competitors is required"),

  marketSubstitution: string().optional(),

  importRestrictions: string().optional(),

  criticalFactors: string().optional(),
});

const technicalSchema = object({
  specialTechComplexitiesDesc: string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description too long")
    .required("Primary user description is required"),

  keyEquipementDesc: string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description too long")
    .required("Primary user description is required"),
});

const humanResources = object({
  mangtPositionNumber: string()
    .min(0, "Management positions cannot be negative")
    .required("Management positions is required"),

  techSkilledWorkersNumber: string()
    .min(0, "Technical/skilled workers cannot be negative")
    .required("Technical/skilled workers is required"),

  semiTechSkilledWorkersNumber: string()
    .min(0, "Semi-skilled workers cannot be negative")
    .required("Semi-skilled workers is required"),

  unskilledWorkersNumber: string()
    .min(0, "Unskilled workers cannot be negative")
    .required("Unskilled workers is required"),

  totalEmployment: string()
    .min(0, "Total employment cannot be negative")
    .required("Total employment is required"),

  availableSkillsRequired: string()
    .required("Availability of required skills is required")
    .min(
      10,
      "Please provide at least 10 characters describing skill availability"
    )
    .max(1000, "Description is too long"),
});

const infrastructureRequirements= object({
  transportationStatus: string()
    .required("Transportation status is required")
    .oneOf(
      levels.map((level) => level.value),
      "Please select a valid status"
    ),

  communicationsStatus: string()
    .required("Communications status is required")
    .oneOf(
      levels.map((level) => level.value),
      "Please select a valid status"
    ),

  powerSupplyStatus: string()
    .required("Power supply status is required")
    .oneOf(
      levels.map((level) => level.value),
      "Please select a valid status"
    ),

  waterSupplyStatus: string()
    .required("Water supply status is required")
    .oneOf(
      levels.map((level) => level.value),
      "Please select a valid status"
    ),
});

const operatingCostsAnnual = object({
  currency: string()
    .required("Currency is required")
    .oneOf(
      currencies.map((c) => c.value),
      "Please select a valid currency"
    ),

  rawMaterialCosts: string()
    .min(0, "Raw materials cost cannot be negative")
    .required("Raw materials cost is required"),

  laborCosts: string()
    .min(0, "Labor costs cannot be negative")
    .required("Labor costs are required"),

  utilitiesCosts: string()
    .min(0, "Utilities cost cannot be negative")
    .required("Utilities cost is required"),

  maintenanceCosts: string()
    .min(0, "Maintenance cost cannot be negative")
    .required("Maintenance cost is required"),

  administrationCosts: string()
    .min(0, "Administration cost cannot be negative")
    .required("Administration cost is required"),

  marketingCosts: string()
    .min(0, "Marketing/Sales cost cannot be negative")
    .required("Marketing/Sales cost is required"),

  otherCosts: string()
    .min(0, "Other costs cannot be negative")
    .required("Other costs are required"),

  totalOperatingCosts: string()
    .min(0, "Total operating costs cannot be negative")
    .required("Total operating costs are required"),
});

const rawMaterialsSupplyChain = object({
  sourceRawMaterials: string()
    .required("Source of raw materials is required")
    .min(
      10,
      "Please provide at least 10 characters describing the source of raw materials"
    )
    .max(2000, "Description is too long"),

  qualityAssuranceMeasures: string()
    .required("Quality assurance measures are required")
    .min(
      10,
      "Please provide at least 10 characters describing quality assurance measures"
    )
    .max(2000, "Description is too long"),

  importRestrictions: string()
    .required("Import restrictions information is required")
    .min(
      10,
      "Please provide at least 10 characters describing import restrictions"
    )
    .max(2000, "Description is too long"),
});

const plantLocationAndSize = object({
  suppliersLocation: string()
    .required("Suppliers location is required")
    .min(2, "Suppliers location must be at least 2 characters")
    .max(100, "Suppliers location is too long"),

  marketsLocation: string()
    .required("Markets location is required")
    .min(2, "Markets location must be at least 2 characters")
    .max(100, "Markets location is too long"),

  infrastructureLocation: string()
    .required("Infrastructure location is required")
    .min(2, "Infrastructure location must be at least 2 characters")
    .max(100, "Infrastructure location is too long"),

  workforceLocation: string()
    .required("Workforce location is required")
    .min(2, "Workforce location must be at least 2 characters")
    .max(100, "Workforce location is too long"),

  plantSize: string()
    .required("Plant size is required")
    .oneOf(
      plantSizeOptions.map((size) => size.value),
      "Please select a valid status"
    ),
});

const environmentalAndSocialImpact = object({
  environmentalIssuesDesc: string()
    .required("Environmental issues description is required")
    .min(
      10,
      "Please provide at least 10 characters describing environmental issues"
    )
    .max(2000, "Description is too long"),

  mitigationMeasuresDesc: string()
    .required("Mitigation measures description is required")
    .min(
      10,
      "Please provide at least 10 characters describing mitigation measures"
    )
    .max(2000, "Description is too long"),

  socialBenefitsDesc: string()
    .required("Social benefits description is required")
    .min(10, "Please provide at least 10 characters describing social benefits")
    .max(2000, "Description is too long"),
});

const totalInvestmentRequirements = object({
  currency: string()
    .required("Currency is required")
    .oneOf(
      currencies.map((c) => c.value),
      "Please select a valid currency"
    ),

  landSitePreparation: string()
    .required("Land and site preparation cost is required"),

  buildingsInfrastructure: string()
    .required("Buildings and infrastructure cost is required"),

  machineryEquipment: string()
    .required("Machinery and equipment cost is required"),

  preOperatingExpenses: string()
    .required("Pre-operating expenses cost is required"),

  workingCapital: string()
    .required("Working capital is required"),

  contingency: string()
    .required("Contingency cost is required"),

  totalProjectCost: string()
    .required("Total project cost is required"),
});

// const getPercentageValues = () => {
//   // Adjust based on your actual data structure
//   return percentages.map((p) => p.value || p);
// };

const financingStructure = object({
  currency: string()
    .required("Currency is required")
    .oneOf(
      currencies.map((c) => c.value),
      "Please select a valid currency"
    ),

  // Sponsor Equity
  sponsorEquityAmount: string()
    .required("Sponsor equity amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  sponsorEquityPercentage: string()
    .required("Sponsor equity percentage is required")
    .oneOf(
      percentages.map((c) => c.value),
      "Please select a valid percentage"
    ),

  // Requested Financing
  requestedFinancingAmount: string()
    .required("Requested financing amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  requestedFinancingPercentage: string()
    .required("Requested financing percentage is required")
    .oneOf(
      percentages.map((c) => c.value),
      "Please select a valid percentage"
    ),

  // Government Grants
  governmentGrantsAmount: string()
    .required("Government grants amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  governmentGrantsPercentage: string()
    .required("Government grants percentage is required")
    .oneOf(
      percentages.map((c) => c.value),
      "Please select a valid percentage"
    ),

  // Others
  othersAmount: string()
    .required("Other financing amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  othersPercentage: string()
    .required("Other financing percentage is required")
    .oneOf(
      percentages.map((c) => c.value),
      "Please select a valid percentage"
    ),

  // Total
  totalAmount: string()
    .required("Total amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  totalPercentage: string()
    .required("Total percentage is required")
    .oneOf(
      percentages.map((c) => c.value),
      "Please select a valid percentage"
    ),
});

const financingTypeValues = [
  "Loan",
  "Equity investment",
  "Quasi-equity",
  "Combination of financial products",
  "Other",
];

const typeOfFinancingRequested = object({
  // Multiple selection for financing types
  financingTypes: array()
    .of(string().oneOf(financingTypeValues, "Invalid financing type selected"))
    .min(1, "Please select at least one financing type")
    .required("Financing type selection is required"),

  // Conditional validation for "Other" option
  otherFinancingType: string().when("financingTypes", {
    is: (types) => types && types.includes("Other"),
    then: (schema) =>
      schema
        .required("Please specify the other financing type")
        .min(
          2,
          "Please provide at least 2 characters for the other financing type"
        )
        .max(100, "Other financing type description is too long"),
    otherwise: (schema) => schema.notRequired(),
  }),

  currency: string()
    .required("Currency is required")
    .oneOf(
      currencies.map((c) => c.value),
      "Please select a valid currency"
    ),

  requestedAmount: string()
    .required("Requested amount is required")
    .matches(/^\d+(,\d{2})?$/, "Please enter a valid amount (e.g., 1000,00)"),

  proposedTenor: string()
    .required("Proposed tenor is required")
    .matches(
      /^\d+\s*(Years?|yrs?)?$/i,
      'Please enter a valid tenor (e.g., "3 Years" or "3")'
    )
    .test("tenor-range", "Tenor should be between 1 and 30 years", (value) => {
      const years = parseInt(value) || 0;
      return years >= 1 && years <= 30;
    }),

  gracePeriod: string()
    .required("Grace period is required")
    .matches(
      /^\d+\s*(Months?|mos?)?$/i,
      'Please enter a valid grace period (e.g., "12 Months" or "12")'
    )
    .test(
      "grace-period-range",
      "Grace period should be between 0 and 36 months",
      (value) => {
        const months = parseInt(value) || 0;
        return months >= 0 && months <= 36;
      }
    ),
});

const positiveNumber = () =>
  number().typeError("Must be a number").min(0, "Cannot be negative");

// Helper function for percentage validation
const percentageValidation = () =>
  number()
    .typeError("Must be a number")
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100%");

export const financialProjections = object({
  // Year 1 - Required
  year1Revenue: positiveNumber().required("Year 1 Revenue is required"),

  year1OperatingProfit: positiveNumber().required(
    "Year 1 Operating Profit is required"
  ),

  year1NetProfit: positiveNumber().required("Year 1 Net Profit is required"),

  year1RoiPercentage: percentageValidation().required(
    "Year 1 ROI percentage is required"
  ),

  year1RoePercentage: percentageValidation().required(
    "Year 1 ROE percentage is required"
  ),

  // Year 2 - Required
  year2Revenue: positiveNumber().required("Year 2 Revenue is required"),

  year2OperatingProfit: positiveNumber().required(
    "Year 2 Operating Profit is required"
  ),

  year2NetProfit: positiveNumber().required("Year 2 Net Profit is required"),

  year2RoiPercentage: percentageValidation().required(
    "Year 2 ROI percentage is required"
  ),

  year2RoePercentage: percentageValidation().required(
    "Year 2 ROE percentage is required"
  ),

  // Year 3 - Required
  year3Revenue: positiveNumber().required("Year 3 Revenue is required"),

  year3OperatingProfit: positiveNumber().required(
    "Year 3 Operating Profit is required"
  ),

  year3NetProfit: positiveNumber().required("Year 3 Net Profit is required"),

  year3RoiPercentage: percentageValidation().required(
    "Year 3 ROI percentage is required"
  ),

  year3RoePercentage: percentageValidation().required(
    "Year 3 ROE percentage is required"
  ),

  // Year 4 - Optional
  year4Revenue: positiveNumber().nullable().notRequired(),

  year4NetProfit: positiveNumber().nullable().notRequired(),

  // Year 5 - Optional
  year5Revenue: positiveNumber().nullable().notRequired(),

  year5NetProfit: positiveNumber().nullable().notRequired(),
});

const criticalSuccessFactors = object({
  keyFactors: string()
    .required("Critical success factors description is required")
    .min(
      10,
      "Please provide at least 10 characters describing the key success factors"
    )
    .max(5000, "Description is too long (maximum 5000 characters)"),
});

export {
  sponsorInfoSchema,
  businessHistorySchema,
  managementStructureSchema,
  technicalAssistanceSchema,
  productionAndSalesSchema,
  targetMarketSchema,
  marketEnvironmentSchema,
  technicalSchema,
  humanResources,
  infrastructureRequirements,
  rawMaterialsSupplyChain,
  operatingCostsAnnual,
  plantLocationAndSize,
  environmentalAndSocialImpact,
  totalInvestmentRequirements,
  financingStructure,
  typeOfFinancingRequested,
  criticalSuccessFactors,
};