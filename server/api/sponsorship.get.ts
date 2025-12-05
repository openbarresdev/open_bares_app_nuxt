import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const { projectId } = getQuery(event);

    if (!projectId) {
      return { success: false, error: "Project ID is required" };
    }

    const sponsorship = await prisma.sponsorship.findUnique({
      where: { projectId: parseInt(projectId as string) },
    });

    return {
      success: true,
      data: sponsorship || {
        sponsorInfo: null,
        sponsorBusinessHist: null,
        managementStructure: null,
        technicalAssistance: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to fetch sponsorship data",
    };
  }
});