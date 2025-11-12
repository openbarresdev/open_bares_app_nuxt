// import { getCookie } from "h3";
// import jwt from "jsonwebtoken";
// import { readFileSync } from "fs";

// export async function getUserFromSession(event:any) {
//   const token = getCookie(event, "session");
//   if (!token) return null;

//   try {
//     const secret = process.env.JWT_SECRET || "mysecret";
//     const payload = jwt.verify(token, secret) as { id: number; email: string };
//     return payload;
//   } catch {
//     return null;
//   }
// }
