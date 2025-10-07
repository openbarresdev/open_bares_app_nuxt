import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  role: string;
  userId: string;
  exp?: number;
  iat?: number;
}

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("auth_token").value;

  const publicRoutes = ["/login", "/signup"];
  const isPublic = publicRoutes.includes(to.path);
  const isAuthenticated = !!token;

  if (!isAuthenticated && !isPublic) {
    return navigateTo("/login");
  }

  if (isAuthenticated) {
    try {
      const decoded = jwtDecode<CustomJwtPayload>(token);
      // console.log("Token décodé :", decoded);

      const role = decoded.role;
      // console.log("Rôle utilisateur :", role);

      if ((role === "ADMIN" || role === "SUPER_ADMIN") && to.path === "/") {
        return navigateTo("/admin/dashboard");
      }

      if (role === "USER" && to.path.startsWith("/admin")) {
        return navigateTo("/");
      }
    } catch (err) {
      console.error("Erreur de décodage du token :", err);
      return navigateTo("/login");
    }
  }

  if (isAuthenticated && isPublic) {
    return navigateTo("/");
  }
});
