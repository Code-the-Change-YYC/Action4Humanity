import pino from "pino";

import { env } from "~/env.mjs";

const IS_DEV = env.NODE_ENV === "development";
const level = IS_DEV ? "trace" : "info";

const logger = pino({
  level,
  ...(IS_DEV && {
    transport: { target: "pino-pretty" },
  }),
});

export default logger;
