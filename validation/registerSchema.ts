import { object, string, ref } from "yup";

export const registerSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
