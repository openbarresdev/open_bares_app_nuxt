import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { supportingDocId, projectId, documentIds } = body;

    // Vérifier les documents requis
    const requiredDocTypes = ["business_license", "id_card", "tax_certificate"];

    // Récupérer les documents
    const uploadedDocs = await prisma.document.findMany({
      where: {
        id: { in: documentIds },
        supportingDocId: supportingDocId,
      },
      select: { docType: true },
    });

    const uploadedTypes = uploadedDocs.map((doc) => doc.docType);
    const missingRequired = requiredDocTypes.filter(
      (type) => !uploadedTypes.includes(type)
    );

    if (missingRequired.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: `Missing required documents: ${missingRequired.join(
          ", "
        )}`,
      });
    }

    // Marquer les documents comme vérifiés
    await prisma.document.updateMany({
      where: {
        id: { in: documentIds },
        supportingDocId: supportingDocId,
      },
      data: {
        isVerified: true,
      },
    });

    // Mettre à jour SupportingDocuments
    await prisma.supportingDocuments.update({
      where: { id: supportingDocId },
      data: {
        notes: "Documents submitted and verified",
        updatedAt: new Date(),
      },
    });

    // Mettre à jour ApplicationSettings
    const applicationSettings = await prisma.applicationSettings.findFirst({
      where: {
        userId: userId,
        projectId: projectId,
      },
    });

    if (applicationSettings) {
      const steps = applicationSettings.steps || {};
      steps.documentsPercent = true;

      await prisma.applicationSettings.update({
        where: { id: applicationSettings.id },
        data: {
          steps: steps,
          updatedAt: new Date(),
        },
      });
    }

    return {
      success: true,
      message: "Documents submitted successfully",
      submittedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Submit documents error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to submit documents",
    });
  }
});
