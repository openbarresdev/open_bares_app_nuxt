import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "auth_token");

  if (!token) {
    return { authenticated: false };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    return {
      authenticated: true,
      user: decoded,
    };
  } catch (error) {
    return { authenticated: false };
  }
});
