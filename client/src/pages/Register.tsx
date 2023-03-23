import { useUserAuth } from "../contexts/UserAuthContext"

export default function Register() {
  const { register } = useUserAuth();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-white">
          Register Page
        </div>
      </div>
    </>
  )
}
