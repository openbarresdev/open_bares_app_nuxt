import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { supportingDocId } = getQuery(event);

    if (!supportingDocId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Supporting document ID is required",
      });
    }

    const documents = await prisma.document.findMany({
      where: {
        supportingDocId: parseInt(supportingDocId),
      },
      orderBy: {
        uploadedAt: "desc",
      },
      select: {
        id: true,
        docType: true,
        originalName: true,
        url: true,
        publicId: true,
        format: true,
        size: true,
        isVerified: true,
        uploadedAt: true,
      },
    });

    // Grouper par type de document
    const groupedDocuments = documents.reduce((acc, doc) => {
      acc[doc.docType] = doc;
      return acc;
    }, {});

    return {
      success: true,
      data: groupedDocuments,
      count: documents.length,
    };
  } catch (error) {
    console.error("Get documents error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch documents",
    });
  }
});
