import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

import { appRouter } from "./server";
import logger from "./server/log";
import { configureEnv, isDev } from "./server/util";

const config = configureEnv();
logger.info(config, "dotenv config");

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

const startServer = () => {
  const { port } = server.listen(8080);
  if (isDev()) {
    // eslint-disable-next-line no-console
    console.log(
      "\x1b[1m",
      `\ndev server running at http://localhost:${port ?? ""} 🚀\n`,
      "\x1b[0m"
    );
  }
};

/**
 * this is a early-stage setup using trpc's standalone server, when we go to deploy
 * we'll need to look into set up on lambda (https://trpc.io/docs/aws-lambda).
 */
startServer();
