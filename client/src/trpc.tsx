import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { useState } from "react";

import type { AppRouter } from "../../server";
import { isDev } from "./util";

export const trpc = createTRPCReact<AppRouter>();

interface Props {
  children?: React.ReactNode;
}

export const TRPCContext = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    const url = isDev() ? "http://localhost:8080" : "";

    return trpc.createClient({
      links: [httpBatchLink({ url })],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
