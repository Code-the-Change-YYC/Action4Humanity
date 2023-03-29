import { type Prisma, PrismaClient } from "@prisma/client";

import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient<Prisma.PrismaClientOptions, "query">;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: [
      {
        level: "error",
        emit: "stdout",
      },
      {
        level: "warn",
        emit: "stdout",
      },
    ],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
