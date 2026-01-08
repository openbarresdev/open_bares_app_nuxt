import { getCookie } from "h3";
import jwt from "jsonwebtoken";
// import { jwtDecode } from "jwt-decode";
import { prisma } from "~/server/lib/prisma";

// interface JwtPayload {
//   userId: number;
// }

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "auth_token");

  try {
    if (!token) {
      return { hasProject: false, projectId: null };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: number;
    };
    // const decoded = jwtDecode<JwtPayload>(token);

    const project = await prisma.project.findFirst({
      where: { userId: decoded.userId },
      select: { id: true },
    });

    return {
      hasProject: !!project,
      projectId: project?.id || null,
    };
  } catch (error) {
      
    return { hasProject: false, projectId: null };
  }
});
