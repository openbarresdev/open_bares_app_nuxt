// import { prisma } from "~/server/lib/prisma";
// import { defineEventHandler } from "h3";

// export default defineEventHandler(async (event) => {
//   try {
//     const { projectId } = event.context.params;

//     const sponsorship = await prisma.sponsorship.findUnique({
//       where: { projectId: parseInt(projectId) },
//     });

//     return {
//       success: true,
//       data: sponsorship,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       success: false,
//       error: "Failed to fetch sponsorship data",
//     };
//   }
// });
