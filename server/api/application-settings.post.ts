import { prisma } from "~/server/lib/prisma";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, projectId, steps } = body;

    if (!userId || !projectId || !steps) {
      return {
        success: false,
        error: "User ID, Project ID and steps are required",
        statusCode: 400,
      };
    }

    const progress = await prisma.ApplicationSettings.upsert({
      where: {
        userId_projectId: {
          userId: String(userId),
          projectId: Number(projectId),
        },
      },
      update: { steps },
      create: {
        userId: String(userId),
        projectId: Number(projectId),
        steps,
      },
    });

    return {
      success: true,
      data: progress.steps,
      statusCode: 200,
    };
  } catch (error) {
    console.error("Save Progress Error:", error);
    return {
      success: false,
      error: "Failed to save progress",
      statusCode: 500,
    };
  }
});