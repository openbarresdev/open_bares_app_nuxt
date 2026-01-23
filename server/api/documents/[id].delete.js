import { v2 as cloudinary } from "cloudinary";
import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;
    const body = await readBody(event);
    const { supportingDocId } = body;

    // Vérifier que le document existe et appartient au supportingDoc
    const document = await prisma.document.findFirst({
      where: {
        id: id,
        supportingDocId: parseInt(supportingDocId),
      },
    });

    if (!document) {
      throw createError({
        statusCode: 404,
        statusMessage: "Document not found",
      });
    }

    // Supprimer de Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
      await cloudinary.uploader.destroy(document.cloudinaryId);
    } catch (error) {
      console.warn("Cloudinary delete error:", error);
    }

    // Supprimer de la base de données
    await prisma.document.delete({
      where: { id: id },
    });

    // Mettre à jour documentLinks dans SupportingDocuments
    const remainingDocs = await prisma.document.findMany({
      where: { supportingDocId: parseInt(supportingDocId) },
    });

    const documentLinks = remainingDocs.map((doc) => doc.url);
    await prisma.supportingDocuments.update({
      where: { id: parseInt(supportingDocId) },
      data: {
        documentLinks: JSON.stringify(documentLinks),
      },
    });

    return {
      success: true,
      message: "Document deleted successfully",
    };
  } catch (error) {
    console.error("Delete document error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to delete document",
    });
  }
});
