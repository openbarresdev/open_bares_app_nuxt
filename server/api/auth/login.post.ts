import { compare } from "bcryptjs";
import { prisma } from "~/server/lib/prisma";

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

  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
    },
  };
});
