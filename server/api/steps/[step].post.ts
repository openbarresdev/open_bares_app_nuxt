// server/api/steps/[step].post.ts - SIMPLIFIED
import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";
import { STEP_CONFIG } from "~/server/utils/stepConfig";

export default defineEventHandler(async (event) => {
  try {
    const stepName = event.context.params?.step as string;
    const body = await readBody(event);
    const { projectId, sectionName, sectionData } = body;

    // ✅ Einfache Validierung
    if (!stepName || !projectId || !sectionName) {
      return { success: false, error: "Missing required data" };
    }

    // ✅ Type Assertion
    const config = (STEP_CONFIG as Record<string, any>)[stepName];
    if (!config) {
      return { success: false, error: "Invalid step" };
    }

    // ✅ Einfache Array-Prüfung
    if (
      !Array.isArray(config.sections) ||
      !config.sections.includes(sectionName)
    ) {
      return { success: false, error: "Invalid section" };
    }

    // ✅ Prisma Model mit Type Assertion
    const modelName = config.model as string;
    const model = (prisma as Record<string, any>)[modelName];

    if (!model) {
      return { success: false, error: "Database model not found" };
    }

    // Upsert Logic
    const existing = await model.findUnique({
      where: { projectId: Number(projectId) },
    });

    let result;

    if (existing) {
      // Update
      const updateData: Record<string, any> = {};
      updateData[sectionName] = sectionData;

      result = await model.update({
        where: { projectId: Number(projectId) },
        data: updateData,
      });
    } else {
      // Create
      const createData: Record<string, any> = {
        projectId: Number(projectId),
      };
      createData[sectionName] = sectionData;

      result = await model.create({
        data: createData,
      });
    }

    return {
      success: true,
      data: result,
    };
  } catch (error: any) {
    console.error("API Error:", error);
    return {
      success: false,
      error: "Internal server error",
    };
  }
});
