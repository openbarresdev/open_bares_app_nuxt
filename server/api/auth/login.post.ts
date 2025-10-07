import { compare } from "bcryptjs";
import { prisma } from "~/server/lib/prisma";
import { setCookie } from "h3";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: "Email and password are required",
      });
    }

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

    const token = jwt.sign(
      { userId: user.id, role: user.role },
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

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  } catch (error: any) {
    if (error?.statusCode === 400 || error?.statusCode === 401) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});