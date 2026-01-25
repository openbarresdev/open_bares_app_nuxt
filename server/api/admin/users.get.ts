import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  // (optionnel mais recommandé)
  // await requireAdmin(event)

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,

      project: {
        select: {
          id: true,
          applicantName: true,
          companyName: true,
          country: true,
          projectType: true,
          industrialSector: true,
          createdAt: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    success: true,
    data: users,
  };
});