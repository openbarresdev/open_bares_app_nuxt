import * as yup from "yup";

export const profileSchema = yup.object({
  applicantName: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be less than 25 characters")
    .required("Name is required"),

  applicantTitle: yup.string().required("Title is required"),

  companyName: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must be less than 25 characters")
    .required("Name is required"),

  country: yup.string().required("Title is required"),

  city: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be less than 15 characters")
    .required("Name is required"),

  state: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be less than 15 characters"),
  // .required("Name is required"),

  projectType: yup.string().required("Title is required"),

  projectDescription: yup.string().required("Title is required"),

  industrialSector: yup.string().required("Title is required"),
});
