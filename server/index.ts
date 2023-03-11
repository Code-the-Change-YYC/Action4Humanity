import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();

export const appRouter = t.router({
  // TODO(dhyxy): need to setup data validation library (e.g. zod, typia, etc.)
  helloWorld: t.procedure
    .input((data: unknown) => (typeof data === "string" ? data : "world"))
    .query((req) => `hello ${req.input}`),
});

export type AppRouter = typeof appRouter;
