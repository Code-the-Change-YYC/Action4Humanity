import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";

const allowlist = createTRPCRouter({
  all: adminProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.emailAllowlist.findMany();
  }),
  add: adminProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input: { email } }) => {
      try {
        return await ctx.prisma.emailAllowlist.create({ data: { email } });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new TRPCError({ message: e.message, code: "CONFLICT" });
          }
        }
      }
    }),
  remove: adminProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input: { email } }) => {
      await ctx.prisma.$transaction([
        ctx.prisma.session.deleteMany({
          where: { user: { email: email } },
        }),
        ctx.prisma.emailAllowlist.delete({ where: { email } }),
      ]);
      return email;
    }),
});

export const adminRouter = createTRPCRouter({
  allowlist,
});
