import * as yup from "yup";

export const profileSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be less than 25 characters")
    .required("Name is required"),

  title: yup.string().required("Title is required"),

  company: yup
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
    .max(15, "Name must be less than 15 characters")
    .required("Name is required"),

  project_type: yup.string().required("Title is required"),

  project_description: yup.string().required("Title is required"),

  sector: yup.string().required("Title is required"),
});
