import { OAuth2Client } from "google-auth-library";
import { prisma } from "~/server/lib/prisma";
import jwt from "jsonwebtoken";
import { setCookie } from "h3";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.AUTH_ORIGIN}/api/auth/googleAuth`
);

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code as string;

  if (!code) {
    throw createError({
      statusCode: 400,
      message: "Missing authorization code",
    });
  }

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token!,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();

  const email = payload?.email;

  if (!email) {
    throw createError({
      statusCode: 400,
      message: "Unable to get email from Google",
    });
  }

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
        data: {
        email,
        password: "", 
        role: "USER",
      },
    });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" }
  );

  setCookie(event, "auth_token", token, {
    httpOnly: false,
    secure: false,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    path: "/",
  });

  const redirectUrl =
    user.role === "ADMIN" || user.role === "SUPER_ADMIN"
      ? "/admin/dashboard"
      : "/user/dashboard";

  return sendRedirect(event, redirectUrl);
});
