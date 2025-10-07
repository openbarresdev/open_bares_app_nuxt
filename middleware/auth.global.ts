// auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie("auth_token").value;

  const publicRoutes = ["/login", "/signup"];
  const isProtected = !publicRoutes.includes(to.path);

  if (!token && isProtected) {
    return navigateTo("/login");
  }

  const { data, error } = await useFetch("/api/auth/session-status", {
    headers: {
      // Ensure we're not using cached response
      "Cache-Control": "no-cache",
    },
  }); 
  if (error.value && isProtected) {
    return navigateTo("/login");
  }

  if (data.value?.authenticated && ["/login", "/signup"].includes(to.path)) {
    return navigateTo("/");
  }
});
