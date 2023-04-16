import "~/styles/globals.css";

import { type AppType } from "next/app";
import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

const Action4Humanity: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Action 4 Humanity</title>
      </Head>
      <main>
        <SessionProvider session={session}>
          <Navbar />
          <div className="mx-auto mt-20 w-screen max-w-screen-xl">
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </main>
    </>
  );
};

export default api.withTRPC(Action4Humanity);
