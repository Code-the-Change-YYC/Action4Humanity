import { helloWorld } from "./service";
import { procedure, t } from "./trpc";

export const appRouter = t.router({
  // TODO(dhyxy): need to setup data validation library (e.g. zod, typia, etc.)
  helloWorld: procedure
    .input((data) => String(data))
    .query((req) => helloWorld(req.input)),
});

export type AppRouter = typeof appRouter;
