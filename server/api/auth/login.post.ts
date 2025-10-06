import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user || user.password !== body.password) {
    throw createError({ statusCode: 401, message: "Invalid credentials" });
  }

  return { success: true, user };
});
