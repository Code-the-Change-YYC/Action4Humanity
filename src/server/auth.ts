import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { User as OurUser } from "@prisma/client";
import { UserRole } from "@prisma/client";
import { type GetServerSidePropsContext } from "next";
import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface User extends OurUser {}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }

      return session;
    },
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }

      if (user.role === UserRole.ADMIN) {
        return true;
      }

      const isAllowlisted = !!(await prisma.emailAllowlist.findUnique({
        where: { email: user.email },
      }));
      return isAllowlisted;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: "/login",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
