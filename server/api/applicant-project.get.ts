import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const userId = Number(query.userId);

    if (!userId) throw new Error("Missing userId");

    const project = await prisma.project.findUnique({
      where: { userId },
    });

    return { success: true, project };
  } catch (error) {
    console.error(error);
    return { success: false, error: (error as Error).message };
  }
});
