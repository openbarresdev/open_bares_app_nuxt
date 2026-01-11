import { prisma } from "~/server/lib/prisma";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { projectId, productionAndSales, targetMarket, marketEnvironment } =
      body;

    if (!projectId) {
      return { success: false, error: "Project ID is required" };
    }

    const market = await prisma.marketAnalysis.upsert({
      where: { projectId: parseInt(projectId) },
      update: {
        productionAndSales: productionAndSales,
        targetMarket,
        marketEnvironment,
      },
      create: {
        projectId: parseInt(projectId),
        productionAndSales: productionAndSales,
        targetMarket,
        marketEnvironment,
      },
    });

    return { success: true, data: market };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to save market data" };
  }
});
