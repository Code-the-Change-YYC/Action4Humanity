import { Temporal } from "@js-temporal/polyfill";
import { initTRPC } from "@trpc/server";

import logger from "./log";

export const t = initTRPC.context().create();
const _procedure = t.procedure;

const loggerMiddleware = t.middleware(async ({ path, next, type }) => {
  const start = Temporal.Now.instant();
  const result = await next();
  const now = Temporal.Now.instant();
  const responseTimeMs = start.until(now).microseconds;
  logger.info({ ok: result.ok, path, type, responseTimeMs });
  return result;
});

export const procedure = _procedure.use(loggerMiddleware);
