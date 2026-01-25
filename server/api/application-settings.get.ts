// api/application-settings.get.ts
import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, getQuery } from "h3";

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

    // Si aucune donnée n'existe, retourner des valeurs par défaut
    if (!progress) {
      return {
        success: true,
        data: {
          steps: {},
          preferences: {},
        },
        statusCode: 200,
      };
    }

    // Helper function pour parser les données JSON depuis Prisma
    const parseJsonField = (field:any) => {
      if (!field) return {};

      if (typeof field === "string") {
        try {
          return JSON.parse(field);
        } catch (e) {
          console.error("Error parsing JSON field:", e);
          return {};
        }
      }

      return field || {};
    };

    // Parser les données
    const steps = parseJsonField(progress.steps);
    const preferences = parseJsonField(progress.preferences);

    return {
      success: true,
      data: {
        steps,
        preferences,
      },
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
