import { object, string } from "yup";

export const sponsorInfoSchema = object({
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
