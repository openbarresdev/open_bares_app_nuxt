export const signupHandler = async (values, notyf) => {
  try {
    const res = await $fetch("/api/auth/register", {
      method: "POST",
      body: values,
    });
  
    notyf.success("Registration successful! Redirecting to login...");
    setTimeout(() => {
      navigateTo("/login");
    }, 3000);

    } catch (err) {
      const status = err?.statusCode || 500;
      
      switch (status) {
        case 400:
          notyf.error(err.data?.message || "Invalid input data.");
          break;
        case 409:
          notyf.error("User already exists. Please login instead.");
          break;
        case 500:
          notyf.error("Registration failed. Please try again.");
          break;
        default:
          notyf.error("Something went wrong. Please try again.");
      }
  }
};