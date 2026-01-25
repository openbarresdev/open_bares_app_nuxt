// server/api/admin/auth.post.ts
import { compare } from "bcryptjs";
import { prisma } from "~/server/lib/prisma";
import { setCookie } from "h3";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        message: "Email and password are required",
      });
    }

    // Vérifier si c'est un admin
    const admin = await prisma.user.findUnique({
      where: {
        email: body.email,
        role: "ADMIN", // Seuls les admins peuvent se connecter ici
      },
    });

    if (!admin) {
      throw createError({
        statusCode: 401,
        message: "Invalid admin credentials",
      });
    }

    const isPasswordValid = await compare(body.password, admin.password);

    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { userId: admin.id, role: admin.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "8760h" }
    );

    setCookie(event, "admin_auth_token", token, {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      path: "/",
    });

    return {
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
      },
      token,
    };
  } catch (error: any) {
    if (error?.statusCode === 400 || error?.statusCode === 401) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});
