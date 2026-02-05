import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "@prisma";
const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
  // In Prisma 7, connection is handled via prisma.config.ts
});

export default prisma;
