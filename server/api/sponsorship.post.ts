// server/api/sponsorship/save.ts
import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { projectId, sectionName, sectionData } = body;

    if (!projectId || !sectionName) {
      return {
        success: false,
        error: "Project ID and section name are required",
      };
    }

    // Vérifier que la section est valide
    const validSections = [
      "sponsorInfo",
      "sponsorBusinessHist",
      "managementStructure",
      "technicalAssistance",
    ];

    if (!validSections.includes(sectionName)) {
      return {
        success: false,
        error: "Invalid section name",
      };
    }

    // Upsert avec mise à jour dynamique de la section
    const updateData: any = {};
    updateData[sectionName] = sectionData;

    const sponsorship = await prisma.sponsorship.upsert({
      where: { projectId: parseInt(projectId) },
      update: updateData,
      create: {
        projectId: parseInt(projectId),
        ...updateData,
      },
    });

    return {
      success: true,
      data: sponsorship,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to save sponsorship section",
    };
  }
});