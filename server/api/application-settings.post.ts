import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, projectId, steps, preferences } = body;

    if (!userId || !projectId) {
      return { success: false, error: "Missing userId or projectId" };
    }

    const existing = await prisma.applicationSettings.findUnique({
      where: {
        userId_projectId: {
          userId: String(userId),
          projectId: Number(projectId),
        },
      },
      select: {
        steps: true,
        preferences: true,
      },
    });

  const existingPreferences =
  (existing?.preferences ?? {}) as unknown as Record<string, any>;

  const existingSteps =
  (existing?.steps ?? {}) as unknown as Record<string, any>;

    const mergedSteps = {
      ...existingSteps,
      ...(steps || {}),
    };

    const mergedPreferences = {
      ...existingPreferences,
      ...(preferences || {}),
    };

    const result = await prisma.applicationSettings.upsert({
      where: {
        userId_projectId: {
          userId: String(userId),
          projectId: Number(projectId),
        },
      },
      update: {
        steps: mergedSteps,
        preferences: mergedPreferences,
      },
      create: {
        userId: String(userId),
        projectId: Number(projectId),
        steps: mergedSteps,
        preferences: mergedPreferences,
      },
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Save Progress Error:", error);
    return {
      success: false,
      error: "Failed to save progress",
    };
  }
});
