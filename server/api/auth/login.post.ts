import { compare } from "bcryptjs";
import { prisma } from "~/server/lib/prisma";
import { setCookie } from "h3";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await compare(body.password, user.password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: "Invalid email or password",
    });
  }

    // const config = useRuntimeConfig(event);
    // const token = jwt.sign({ userId: user.id }, config.jwtSecret as string, {
    //   expiresIn: "1h",
    // });

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "24h" }
    );

    setCookie(event, "auth_token", token, {
      httpOnly: false,
      secure: false,
      // secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      sameSite: "lax",
      path: "/",
    });

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      },
    token
  };
});
