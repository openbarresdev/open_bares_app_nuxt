// import { prisma } from "~/server/lib/prisma";

// export default defineEventHandler(async (event) => {
//   const resource = event.context.params?.resource; // 'market', 'sponsorship', etc.

//   if (!resource) {
//     throw createError({
//       statusCode: 400,
//       message: "Resource name is required",
//     });
//   }

//   const body = await readBody(event);
//   const projectId = body.projectId;
//   const data = body[resource]; // Dynamisches Property

//   if (!projectId || !data) {
//     throw createError({
//       statusCode: 400,
//       message: "projectId and data are required",
//     });
//   }

//   try {
//     // Prüfen ob Eintrag existiert
//     const existing = await (prisma as any)[resource].findFirst({
//       where: { projectId: parseInt(projectId) },
//     });

//     if (existing) {
//       // Update
//       await (prisma as any)[resource].update({
//         where: { id: existing.id },
//         data,
//       });
//     } else {
//       // Create
//       await (prisma as any)[resource].create({
//         data: {
//           projectId: parseInt(projectId),
//           ...data,
//         },
//       });
//     }

//     return {
//       success: true,
//       data,
//       message: `${resource} data saved successfully`,
//     };
//   } catch (error) {
//     console.error(`Error saving ${resource}:`, error);
//     throw createError({
//       statusCode: 500,
//       message: `Failed to save ${resource} data`,
//     });
//   }
// });
