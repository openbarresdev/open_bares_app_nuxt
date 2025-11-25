import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...projectData } = body;

    if (!userId) throw new Error("Missing userId");

    // Check if project already exists for this user (1:1)
    const existingProject = await prisma.project.findUnique({
      where: { userId },
    });

    let project;
    if (existingProject) {
      // Update with type assertion
      project = await prisma.project.update({
        where: { userId },
        data: projectData as any,
      });
    } else {
      // Create
      project = await prisma.project.create({
        data: {
          userId,
          ...projectData,
        } as any,
      });
    }

    return { success: true, project };
  } catch (error) {
    console.error(error);
    return { success: false, error: (error as Error).message };
  }
});
