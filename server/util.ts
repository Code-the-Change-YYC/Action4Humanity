import type { DotenvConfigOutput } from "dotenv";
import { config } from "dotenv";

let _envConfig: Readonly<DotenvConfigOutput> = {};
/** Configure environment variables from .env.{environment} file */
export const configureEnv = () => {
  // only parse environment once during runtime
  if (isEmpty(_envConfig)) {
    _envConfig = Object.freeze(
      config({ path: `.env.${process.env.NODE_ENV ?? ""}`, debug: isDev() })
    );
    if (_envConfig.error != null) {
      throw _envConfig.error;
    }
  }
  return _envConfig;
};

export const isDev = () => process.env.NODE_ENV === NodeEnv.DEV;

const NodeEnv = {
  DEV: "development",
  PROD: "production",
  TEST: "test",
} as const;

const isEmpty = (obj: object) => Object.keys(obj).length === 0;
