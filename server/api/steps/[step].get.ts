import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, getQuery } from "h3";
import { STEP_CONFIG } from "~/server/utils/stepConfig";

export default defineEventHandler(async (event) => {
  const stepName = event.context.params!.step as keyof typeof STEP_CONFIG;
  const { projectId } = getQuery(event);

  if (!projectId) {
    return { success: false, error: "Project ID required" };
  }

    const config = STEP_CONFIG[stepName];
    
  if (!config) {
    return { success: false, error: "Invalid step" };
  }

 const model = prisma[config.model as keyof typeof prisma] as any;

  const data = await model.findUnique({
    where: { projectId: Number(projectId) },
  });

  return {
    success: true,
    data: data || {},
  };
});
