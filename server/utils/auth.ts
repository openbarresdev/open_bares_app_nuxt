// server/utils/auth.ts
import { getCookie, createError, H3Event } from "h3";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: number;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}

/**
 * Reads the "auth_token" cookie and verifies it with JWT_SECRET.
 * Returns the decoded user payload or null if invalid.
 */
export async function getUserFromSession(
  event: H3Event
): Promise<JwtPayload | null> {
  const token = getCookie(event, "auth_token");

  if (!token) {
    return null;
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}

/**
 * Helper to enforce authentication in API routes.
 * Throws a 401 error if user is not logged in.
 */
export async function requireUser(event: H3Event): Promise<JwtPayload> {
  const user = await getUserFromSession(event);
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  return user;
}
