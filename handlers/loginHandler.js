export const loginHandler = async (values, notyf) => {
  try {
    const res = await $fetch("/api/auth/login", {
      method: "POST", 
      body: values,
    });

    notyf.success("Login successful! Redirecting...");
    setTimeout(() => {
      navigateTo("/");
    }, 3000);
    
  } catch (err) {
    const status = err.statusCode || err.status;
    const message = {
      400: "Invalid input data",
      401: "Invalid credentials", 
      500: "Server error"
    }[status] || "Something went wrong";
    
    notyf.error(`${message}. Please try again.`);
    console.log(`Error ${status}:`, err.data?.message || err.message);
  }
};