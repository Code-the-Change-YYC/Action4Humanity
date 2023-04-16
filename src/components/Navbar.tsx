import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthenticated = useSession().status === "authenticated";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navIcons = (
    [
      ["/dashboard", DashboardOutlinedIcon],
      ["/chat", ChatBubbleOutlineIcon],
      ["/profile", PermIdentityIcon],
    ] as const
  ).map(
    ([path, Icon]) =>
      pathname !== path && (
        <Link href={path} key={path} onClick={() => setIsDrawerOpen(false)}>
          <Icon className="hover:fill-orange" fontSize="inherit" />
        </Link>
      )
  );

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
            <div className="flex items-center gap-4">
              <div className="text-black sm:flex sm:gap-4">
                {!isAuthenticated && (
                  <>
                    <Link
                      className="block rounded-md bg-orange px-5 py-2.5 text-sm font-medium text-white"
                      href="/login"
                    >
                      Login
                    </Link>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <div className="hidden gap-4 text-2xl md:flex">
                      {navIcons}
                      <Link
                        href="/"
                        onClick={() => void signOut({ callbackUrl: "/" })}
                        className="cursor-pointer"
                      >
                        <LogoutIcon
                          className="hover:fill-orange"
                          fontSize="inherit"
                        />
                      </Link>
                    </div>
                    <div className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                      <a onClick={() => setIsDrawerOpen(true)}>
                        <MenuIcon />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Drawer
          className="md:hidden"
          open={isDrawerOpen}
          anchor="right"
          onClose={() => setIsDrawerOpen(false)}
        >
          <div className="flex h-screen flex-col justify-evenly gap-8 px-6 py-12 text-3xl">
            {navIcons}
          </div>
        </Drawer>
      </header>
    </>
  );
};

export default Navbar;
