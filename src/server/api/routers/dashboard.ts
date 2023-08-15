import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const dashboardRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      orderBy: [
        {
          date: "asc",
        },
      ],
    });
  }),
});
