export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("auth_token").value;

    const protectedRoute = !["/login", "/signup"].includes(to.path);
    const isAuthenticated = !!token;
   
  if (!isAuthenticated && protectedRoute) {
    return navigateTo("/login");
  }

  if (isAuthenticated && (to.path === "/login" || to.path === "/signup")) {
    return navigateTo("/");
  }
});
