export const loginHandler = async (values) => {
    try {
      const res = await $fetch("/api/auth/login", {
        method: "POST",
        body: values,
      });

    //   notify.success("Welcome back!"); 
      navigateTo("/");
    } catch (err) {
      if (err.statusCode === 401) {
        console.error("Invalid email or password");
      } else {
        console.error("Something went wrong. Please try again.");
      }
    }
};