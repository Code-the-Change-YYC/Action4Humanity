import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "../../server/router";

export default createTRPCReact<AppRouter>();
