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

export { sponsorInfoSchema, businessHistorySchema };