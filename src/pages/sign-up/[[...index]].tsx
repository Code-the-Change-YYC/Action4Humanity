import { SignUp } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { LoadingPage } from "~/components/LoadingPage";

const SignUpPage: NextPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      void router.push("/dashboard"); // change this later..?
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <>
      {isLoaded && !isSignedIn ? (
        <div className="flex min-h-screen flex-col items-center bg-off-white pt-[10%] text-black">
          <SignUp
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            redirectUrl="/dashboard"
          />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default SignUpPage;
