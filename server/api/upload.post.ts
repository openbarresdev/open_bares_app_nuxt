import { defineEventHandler, readMultipartFormData } from "h3";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);

    if (!files || files.length === 0) {
      throw new Error("No file received");
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    mkdirSync(uploadDir, { recursive: true });

    const savedFiles: string[] = [];

    for (const file of files) {
      if (!file.filename || !file.data) continue;

      const safeFilename = path.basename(file.filename);
      const filePath = path.join(uploadDir, safeFilename);

      writeFileSync(filePath, file.data as unknown as NodeJS.ArrayBufferView);

      savedFiles.push(`/uploads/${safeFilename}`);
    }

    return { success: true, files: savedFiles };
  } catch (error) {
    console.error(error);
    return { success: false, message: (error as Error).message };
  }
});
