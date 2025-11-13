import {
  defineEventHandler,
  getRouterParam,
  sendStream,
  createError,
} from "h3";
import { createReadStream, existsSync } from "fs";
import path from "path";
import { getUserFromSession } from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
  const user = await getUserFromSession(event);
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  const filename = getRouterParam(event, "filename");

  if (!filename) {
    throw createError({
      statusCode: 400,
      message: "Missing filename parameter",
    });
  }

  const userFilePath = path.join(
    process.cwd(),
    "server",
    "uploads",
    `user_${user.userId}`,
    path.basename(filename)
  );

  if (!existsSync(userFilePath)) {
    throw createError({ statusCode: 404, message: "File not found" });
  }

  return sendStream(event, createReadStream(userFilePath));
});
