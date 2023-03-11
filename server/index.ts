import { procedure, t } from "./trpc";

export const appRouter = t.router({
  // TODO(dhyxy): need to setup data validation library (e.g. zod, typia, etc.)
  helloWorld: procedure
    .input((data: unknown) => (typeof data === "string" ? data : "world"))
    .query((req) => `hello ${req.input}`),
});

export type AppRouter = typeof appRouter;
