export const logoutHandler = async (notyf) => {
  try {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });

    const authToken = useCookie("auth_token");
    authToken.value = null;

    await navigateTo("/login");

    notyf.success("Logged out successfully");
  } catch (error) {
    notyf.error("Logout failed");
  }
};
