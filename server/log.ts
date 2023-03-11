import pino from "pino";

import { isDev } from "./util";

const level: pino.Level = isDev() ? "trace" : "info";
const logger = pino({ level });

export default logger;
