import { v2 as cloudinary } from "cloudinary";
import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event);

    const fileData = formData.find((item) => item.name === "file");
    const docType = formData
      .find((item) => item.name === "docType")
      ?.data.toString();
    const supportingDocIdStr = formData
      .find((item) => item.name === "supportingDocId")
      ?.data.toString();
    const originalName = formData
      .find((item) => item.name === "originalName")
      ?.data.toString();

    const supportingDocId = parseInt(supportingDocIdStr);

    if (!fileData || !docType || !supportingDocId || !originalName) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    // Vérifier que le SupportingDocuments existe
    const supportingDoc = await prisma.supportingDocuments.findUnique({
      where: { id: supportingDocId },
      include: { project: true },
    });

    if (!supportingDoc) {
      throw createError({
        statusCode: 404,
        statusMessage: "Supporting documents record not found",
      });
    }

    const { projectId, project } = supportingDoc;

    // Configurer Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Structure Cloudinary : users/{userId}/projects/{projectId}/documents
    const folderPath = `users/${project.userId}/projects/${projectId}/documents`;
    const timestamp = Date.now();
    const uniqueId = `${docType}_${timestamp}`;

    // Upload vers Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folderPath,
          resource_type: "auto",
          public_id: uniqueId,
          tags: [
            `user_${project.userId}`,
            `project_${projectId}`,
            `type_${docType}`,
            `supportingDoc_${supportingDocId}`,
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      uploadStream.end(fileData.data);
    });

    // Vérifier si un document de ce type existe déjà
    const existingDoc = await prisma.document.findFirst({
      where: {
        supportingDocId: supportingDocId,
        docType: docType,
      },
    });

    let document;

    if (existingDoc) {
      // Mettre à jour le document existant
      document = await prisma.document.update({
        where: { id: existingDoc.id },
        data: {
          originalName,
          cloudinaryId: uploadResult.public_id,
          publicId: uploadResult.public_id,
          url: uploadResult.secure_url,
          format: uploadResult.format,
          size: uploadResult.bytes,
          uploadedAt: new Date(),
          metadata: {
            cloudinary: {
              public_id: uploadResult.public_id,
              secure_url: uploadResult.secure_url,
              format: uploadResult.format,
              bytes: uploadResult.bytes,
            },
            originalName,
          },
        },
      });

      // Supprimer l'ancien fichier Cloudinary
      try {
        await cloudinary.uploader.destroy(existingDoc.cloudinaryId);
      } catch (error) {
        console.warn("Failed to delete old Cloudinary file:", error);
      }
    } else {
      // Créer un nouveau document
      document = await prisma.document.create({
        data: {
          supportingDocId,
          docType,
          originalName,
          cloudinaryId: uploadResult.public_id,
          publicId: uploadResult.public_id,
          url: uploadResult.secure_url,
          format: uploadResult.format,
          size: uploadResult.bytes,
          metadata: {
            cloudinary: {
              public_id: uploadResult.public_id,
              secure_url: uploadResult.secure_url,
              format: uploadResult.format,
              bytes: uploadResult.bytes,
            },
            originalName,
          },
        },
      });
    }

    // Mettre à jour documentLinks dans SupportingDocuments (pour compatibilité)
    const allDocuments = await prisma.document.findMany({
      where: { supportingDocId: supportingDocId },
    });

    const documentLinks = allDocuments.map((doc) => doc.url);
    await prisma.supportingDocuments.update({
      where: { id: supportingDocId },
      data: {
        documentLinks: documentLinks,
      },
    });

    return {
      success: true,
      message: "File uploaded successfully",
      document: {
        id: document.id,
        docType: document.docType,
        originalName: document.originalName,
        url: document.url,
        publicId: document.publicId,
        format: document.format,
        size: document.size,
        uploadedAt: document.uploadedAt,
      },
    };
  } catch (error) {
    console.error("Upload error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Upload failed: ${error.message}`,
    });
  }
});
