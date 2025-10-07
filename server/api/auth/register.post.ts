import { hash } from "bcryptjs";
import prisma from "~/server/lib/prisma";
import { registerSchema } from "~/validation/registerSchema";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      email: string;
      password: string;
      confirmPassword: string;
    }>(event);

    if (!body.email || !body.password || !body.confirmPassword) {
      throw createError({
        statusCode: 400,
        message: "All fields are required",
      });
    }

    await registerSchema.validate(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      throw createError({
        statusCode: 409,
        message: "User already exists",
      });
    }

    const hashedPassword = await hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    };
  } catch (error: any) {
    if (error?.statusCode === 400 || error?.statusCode === 409) {
      throw error;
    }

    if (error?.name === "ValidationError") {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }

    throw createError({
      statusCode: 500,
      message: "Registration failed. Please try again.",
    });
  }
});
