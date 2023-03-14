import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

import trpc from "../trpc";
import { isDev } from "../util";

interface Props {
  children?: React.ReactNode;
}

// TODO: we don't have a production URL
const TRPC_URL = isDev() ? "http://localhost:8080" : "";

export const TRPCContext = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [httpBatchLink({ url: TRPC_URL })],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
