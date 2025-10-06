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

    await registerSchema.validate(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      throw createError({ statusCode: 400, message: "User already exists" });
    }

    const hashedPassword = await hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });

    return { success: true, user: { id: newUser.id, email: newUser.email } };
  } catch (err: any) {
    throw createError({
      statusCode: 400,
      message: err.message || "Registration failed",
    });
  }
});
