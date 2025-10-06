import { object, string, ref } from "yup";

export const useRegisterValidation = () => {
  const registerSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return { registerSchema };
};
