export const signupHandler = async (values) => {
  try {
    const res = await $fetch("/api/auth/register", {
      method: "POST",
      body: values,
    });
    console.log("Registration success:", res);
    return res;
  } catch (err) {
    console.error("Registration failed:", err);
    throw err;
  }
};