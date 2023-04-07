import { useRouter } from "next/navigation";

import Button from "~/components/Button";
import InputField from "~/components/InputField";

const Register = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-purple">
        <div className="h-1/2 w-11/12 rounded-sm bg-white p-6 shadow-2xl md:w-1/2">
          <div className="flex flex-col gap-y-6">
            <div className="text-xl font-bold">Register</div>
            <div>
              <InputField
                htmlFor="UserEmail"
                type="email"
                placeholder="example@example.com"
                label="Email"
              />
            </div>
            <div>
              <InputField
                htmlFor="UserPassword"
                type="password"
                placeholder="******"
                label="Password"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 pt-6">
            <Button label="Sign In" />
            <div className="flex flex-row gap-x-1">
              <div>Already have an account?</div>
              <div
                className="text-blue-500 hover:cursor-pointer"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Log In
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
