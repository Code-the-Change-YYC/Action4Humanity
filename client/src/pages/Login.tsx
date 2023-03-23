import { useUserAuth } from "../contexts/UserAuthContext";

export default function Login() {
  const { login } = useUserAuth();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-white">Login Page</div>
      </div>
    </>
  );
}
