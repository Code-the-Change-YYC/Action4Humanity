import pino from "pino";

import { env } from "~/env.mjs";

const level = env.NODE_ENV === "development" ? "trace" : "info";

const logger = pino({ level });

export default logger;
