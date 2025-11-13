import {
  defineEventHandler,
  readMultipartFormData,
  getQuery,
  createError,
} from "h3";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { requireUser } from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const files = await readMultipartFormData(event);
  if (!files || files.length === 0) {
    throw createError({ statusCode: 400, message: "No file received" });
  }

  // Get document folder name from query
  const query = getQuery(event);
  const rawDocName = query.doc as string | undefined;

  if (!rawDocName) {
    throw createError({ statusCode: 400, message: "Missing doc name" });
  }

  // Sanitize the folder name
  const safeDocName = rawDocName.replace(/\s+/g, "_").toLowerCase();

  // Construct full path
  const userDir = path.join(
    process.cwd(),
    "server",
    "uploads",
    `user_${user.userId}`,
    safeDocName
  );
  await mkdir(userDir, { recursive: true });

  const savedFiles: string[] = [];

  for (const file of files) {
    if (!file.filename || !file.data) continue;
    const safeName = path.basename(file.filename);
    const filePath = path.join(userDir, safeName);
    await writeFile(filePath, file.data as unknown as NodeJS.ArrayBufferView);
    savedFiles.push(`/uploads/${safeDocName}/${safeName}`);
  }

  return { success: true, files: savedFiles };
});
