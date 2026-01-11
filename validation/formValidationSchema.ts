import { object, string } from "yup";


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
  primaryUserDesc: string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description too long')
    .required('Primary user description is required'),
  
  contributionChannel: string()
    .required('Contribution channel is required')
})


const marketEnvironmentSchema = object({
  sourceOfSupply: string()
    .required('Source of supply is required'),
  
  mainCompetitors: string()
    .required('Main competitors is required'),
  
  marketSubstitution: string()
    .required('Market substitution is required'),
  
  importRestrictions: string()
    .required('Import restrictions is required'),
  
  criticalFactors: string()
    .required('Critical factors is required')
})

export {
  sponsorInfoSchema,
  businessHistorySchema,
  managementStructureSchema,
  technicalAssistanceSchema,
  productionAndSalesSchema,
  targetMarketSchema,
  marketEnvironmentSchema,
};