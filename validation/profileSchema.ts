import * as yup from "yup";

export const profileSchema = yup.object({
  applicantName: yup
    .string()
    .min(2, "Applicant name must be at least 2 characters")
    .max(25, "Applicant name must be less than 25 characters")
    .required("Applicant name is required"),

  applicantTitle: yup.string().required("Title is required"),

  companyName: yup
    .string()
    .min(3, "Company name must be at least 3 characters")
    .max(25, "Company name must be less than 25 characters")
    .required("Company name is required"),

  country: yup.string().required("country is required"),

  city: yup
    .string()
    .min(3, "Your city must be at least 3 characters")
    .max(15, "Your city must be less than 15 characters")
    .required("Your city is required"),

  state: yup
    .string(),
    // .min(3, "The state must be at least 3 characters")
    // .max(15, "The state must be less than 15 characters"),
  // .required("The state is required"),

  projectType: yup.string().required("Project title is required"),

  projectDescription: yup.string().required("Project description is required"),

  industrialSector: yup.string().required("The sector is required"),
});
