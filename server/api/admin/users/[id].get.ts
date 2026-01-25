import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const userId = Number(event.context.params?.id)

  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid userId',
    })
  }

  // 1️⃣ Récupérer le user UNIQUEMENT s'il a un projet
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
      project: {
        isNot: null,
      },
    },
    select: {
      id: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      project: {
        include: {
          sponsorship: true,
          market: true,
          technical: true,
          investment: true,
          government: true,
          timeline: true,
          //   documents: {
          //     include: {
          //       documents: true,
          //     },
          //   },
        },
      },
    },
  });

  if (!user || !user.project) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User or project not found',
    })
  }

  // 2️⃣ Récupérer ApplicationSettings via userId + projectId
  const applicationSettings = await prisma.applicationSettings.findUnique({
    where: {
      userId_projectId: {
        userId: String(user.id),
        projectId: user.project.id,
      },
    },
    select: {
      steps: true,
      preferences: true,
    },
  });

  return {
    success: true,
    data: {
      user,
      applicationSettings,
    },
  }
})
