import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { projectId } = getQuery(event);

    if (!projectId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Project ID is required",
      });
    }

    const supportingDocs = await prisma.supportingDocuments.findUnique({
      where: { projectId: parseInt(projectId) },
      include: {
        documents: {
          orderBy: { uploadedAt: "desc" },
          select: {
            id: true,
            docType: true,
            originalName: true,
            url: true,
            format: true,
            size: true,
            isVerified: true,
            uploadedAt: true,
          },
        },
      },
    });

    if (!supportingDocs) {
      return {
        success: false,
        message: "No supporting documents found",
      };
    }

    return {
      success: true,
      data: supportingDocs,
    };
  } catch (error) {
    console.error("Get supporting documents error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch supporting documents",
    });
  }
});
