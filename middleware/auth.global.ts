export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("auth_token").value;

    const protectedRoute = !["/", "/login", "/register"].includes(to.path);
    const isAuthenticated = !!token;
    // const userSession = await useAsyncData(
    //     "userSession",
    //     () => $fetch("/api/session-status") // A new API route we'll create below
    // );
    
  // if user is not logged in and trying to access protected page
  if (!isAuthenticated && protectedRoute) {
    return navigateTo("/login");
  }

  // if logged in and tries to access login/signup again
  if (isAuthenticated && (to.path === "/login" || to.path === "/signup")) {
    return navigateTo("/");
  }
});
