import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthenticated = useSession().status === "authenticated";

  return (
    <>
      <header
        aria-label="Site Header"
        className="absolute top-0 w-screen bg-white"
      >
        <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="block text-teal-600">
            <Image
              width={1000}
              height={1000}
              src="/logo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end">
            {/* Uncomment if needed */}
            {/* <nav aria-label="Site Nav" className="hidden md:block"> */}
            {/*   <ul className="flex gap-6 items-center text-sm"> */}
            {/*     <li> */}
            {/*       <Link */}
            {/*         className="text-gray-500 transition hover:text-gray-500/75" */}
            {/*         to="/" */}
            {/*       > */}
            {/*         Link1 */}
            {/*       </Link> */}
            {/*     </li> */}

            {/*     <li> */}
            {/*       <Link */}
            {/*         className="text-gray-500 transition hover:text-gray-500/75" */}
            {/*         to="/" */}
            {/*       > */}
            {/*         Link2 */}
            {/*       </Link> */}
            {/*     </li> */}
            {/*   </ul> */}
            {/* </nav> */}

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!isAuthenticated && pathname === "/" && (
                  <>
                    <Link
                      className="block rounded-md bg-orange px-5 py-2.5 text-sm font-medium text-white"
                      href="/login"
                    >
                      Login
                    </Link>

                    <Link
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange transition hover:text-black sm:block"
                      href="/register"
                    >
                      Register
                    </Link>
                  </>
                )}
                {isAuthenticated && (
                  <a onClick={() => void signOut()} className="cursor-pointer">
                    <LogoutIcon />
                  </a>
                )}
              </div>

              {pathname !== "/" &&
                pathname !== "/login" &&
                pathname !== "/register" && (
                  <>
                    <div>
                      <ChatBubbleOutlineIcon />
                    </div>
                    <div>
                      <PermIdentityIcon />
                    </div>
                    <div className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                      <MenuIcon />
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
