import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, projectId } = body;

    // Vérifier que le projet appartient à l'utilisateur
    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: userId,
      },
    });

    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Project not found",
      });
    }

    // Vérifier si SupportingDocuments existe déjà
    let supportingDocs = await prisma.supportingDocuments.findUnique({
      where: { projectId: projectId },
    });

    // Créer si n'existe pas
    if (!supportingDocs) {
      supportingDocs = await prisma.supportingDocuments.create({
        data: {
          projectId: projectId,
          documentLinks: "[]", // JSON array vide
          notes: null,
        },
      });
    }

    return {
      success: true,
      id: supportingDocs.id,
      projectId: supportingDocs.projectId,
    };
  } catch (error) {
    console.error("Init supporting documents error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to initialize supporting documents",
    });
  }
});
