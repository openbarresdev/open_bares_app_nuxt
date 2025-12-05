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

// validation/sponsorshipSchema.ts (ajout pour management structure)
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

export { sponsorInfoSchema, businessHistorySchema, managementStructureSchema };