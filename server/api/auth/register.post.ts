import { Role } from "@prisma/client";
import { hash } from "bcryptjs";
import prisma from "~/server/lib/prisma";
import { registerSchema } from "~/validation/registerSchema";
import { roleAttribSchema } from "~/validation/roleAttribSchema";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      email: string;
      password: string;
      confirmPassword: string;
      role: "USER" | "ADMIN" | "SUPER_ADMIN";
      recoveryEmail: string | null;
    }>(event);

    if (!body.email || !body.password || !body.confirmPassword) {
      throw createError({
        statusCode: 400,
        message: "All fields are required",
      });
    }

    await roleAttribSchema.validate(body);
    if (body.role === "SUPER_ADMIN") {
      const existingSuper = await prisma.user.findFirst({
        where: { role: "SUPER_ADMIN" },
      });

      if (existingSuper) {
        throw createError({
          statusCode: 403,
          message: "Admin already exists.",
        });
      }

      if (!body.recoveryEmail) {
        throw createError({
          statusCode: 400,
          message: "Admin must have a recovery email.",
        });
      }
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
        role: body.role || "USER",
        recoveryEmail: body.recoveryEmail || null,
      },
    });

    return {
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        recoveryEmail: newUser.recoveryEmail
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
