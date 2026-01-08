import { prisma } from "~/server/lib/prisma";
export default defineEventHandler(async (event) => {
  try {
    const { userId, projectId } = getQuery(event);

    if (!userId || !projectId) {
      return {
        success: false,
        error: "User ID and Project ID are required",
        statusCode: 400,
      };
    }

    const progress = await prisma.applicationSettings.findUnique({
      where: {
        userId_projectId: {
          userId: String(userId),
          projectId: Number(projectId),
        },
      },
    });

    return {
      success: true,
      data: progress?.steps || {},
      statusCode: 200,
    };
  } catch (error) {
    console.error("GET Progress Error:", error);
    return {
      success: false,
      error: "Failed to fetch progress",
      statusCode: 500,
    };
  }
});
