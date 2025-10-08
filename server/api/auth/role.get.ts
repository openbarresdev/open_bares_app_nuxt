import { getCookie } from "h3";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  role: "USER" | "ADMIN" | "SUPER_ADMIN";
  userId: string;
  email?: string;
}

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "auth_token");

  try {
    if (!token) {
      throw createError({
        statusCode: 401,
        message: "Not authenticated",
      });
    }

    const decoded = jwtDecode<JwtPayload>(token);
    const role = decoded.role || "USER";

    return {
      success: true,
      user: {
        id: decoded.userId,
        role: role,
        email: decoded.email,
        isUser: role === "USER",
        isAdmin: role === "ADMIN",
        isSuperAdmin: role === "SUPER_ADMIN",
      },
    };
  } catch (error: any) {
    if (
      error?.name === "InvalidTokenError" ||
      error?.name === "JsonWebTokenError"
    ) {
      throw createError({
        statusCode: 401,
        message: "Invalid token",
      });
    }

    throw createError({
      statusCode: 500,
      message: "Failed to get user info",
    });
  }
});