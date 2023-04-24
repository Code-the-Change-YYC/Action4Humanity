import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getProviders, signIn } from "next-auth/react";

import { getServerAuthSession } from "~/server/auth";

const LoginPage: NextPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-purple">
        <div className="h-1/2 w-11/12 rounded-sm bg-white p-6 shadow-2xl md:w-2/3 lg:w-1/2">
          <div className="flex flex-col gap-y-6">
            <div className="text-xl font-bold">Login</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {Object.values(providers ?? {}).map((provider) => (
              <div key={provider.id}>
                <button
                  onClick={() =>
                    void signIn(provider.id, { callbackUrl: "/dashboard" })
                  }
                >
                  {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(context);

  // redirect homepage is user logged in
  if (!!session?.user.id) {
    return { redirect: { destination: "/" }, props: {} };
  }

  const providers = await getProviders();
  return {
    props: { providers: providers ?? [] },
  };
};
