import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";
import { STEP_CONFIG } from "~/server/utils/stepConfig";

export default defineEventHandler(async (event) => {
  const stepName = event.context.params!.step as keyof typeof STEP_CONFIG;
  const body = await readBody(event);
  const { projectId, sectionName, sectionData } = body;

  if (!projectId || !sectionName) {
    return { success: false, error: "Missing data" };
  }

  const config = STEP_CONFIG[stepName];

  type SectionName = (typeof config.sections)[number];

//   const section = sectionName as SectionName;

  if (!config.sections.some((s) => s === sectionName)) {
    return { success: false, error: "Invalid section" };
  }

  const model = prisma[config.model as keyof typeof prisma] as any;


  const updateData: Record<string, any> = {
    [sectionName]: sectionData,
  };

  const result = await model.upsert({
    where: { projectId: Number(projectId) },
    update: updateData,
    create: {
      projectId: Number(projectId),
      ...updateData,
    },
  });

  return { success: true, data: result };
});
