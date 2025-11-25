// import { prisma } from "~/server/lib/prisma";
// import { defineEventHandler, readBody } from "h3";

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event);
//     const {
//       projectId,
//       sponsorInfo,
//       sponsorBusinessHist,
//       managementStructure,
//       technicalAssistance,
//     } = body;

//     if (!projectId) {
//       return { success: false, error: "Project ID is required" };
//     }

//     // Use upsert to create or update
//     const sponsorship = await prisma.sponsorship.upsert({
//       where: { projectId: parseInt(projectId) },
//       update: {
//         sponsorInfo,
//         sponsorBusinessHist,
//         managementStructure,
//         technicalAssistance,
//       },
//       create: {
//         projectId: parseInt(projectId),
//         sponsorInfo,
//         sponsorBusinessHist,
//         managementStructure,
//         technicalAssistance,
//       },
//     });

//     return { success: true, data: sponsorship };
//   } catch (error) {
//     console.error(error);
//     return { success: false, error: "Failed to save sponsorship data" };
//   }
// });
