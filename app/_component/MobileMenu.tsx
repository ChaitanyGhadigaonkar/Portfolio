"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";
import { useSidebarContext } from "../context/SidebarContext";

const MobileMenu = () => {
  const pathname = usePathname();
  const { closeSidebar, sidebarState } = useSidebarContext();
  const router = useRouter();
  return (
    <div
      className={`overlay fixed flex inset-0 bg-[#33333380] z-20 w-full min-h-screen transition-transform  duration-700 ${
        sidebarState ? "translate-x-0" : "-translate-x-full"
      } sm:hidden`}
    >
      <div
        className={`w-full h-full bg-slate-50 xs:w-3/4 duration-500 ${
          sidebarState ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="px-3 py-4 w-full flex justify-between item-center">
          <Link
            href={"/"}
            onClick={() => {
              closeSidebar();
            }}
            className="logo text-head text-xl font-semibold"
          >
            Chaitany Ghadigaonkar
          </Link>
          <FaX
            className=" text-head text-xl my-1"
            onClick={() => closeSidebar()}
          />
        </header>
        <nav className="items-start gap-6 flex flex-col px-5 py-4">
          <Link
            href={"/"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/" && "text-accent"} font-medium `}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${
              pathname === "/projects" && "text-accent"
            } font-medium `}
          >
            Projects
          </Link>
          <Link
            href={"/about"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/about" && "text-accent"} font-medium `}
          >
            About
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1BVPPNJh334hAQCBfD6T4vcHgc_oWgfAu/view?usp=sharing"
            }
            onClick={() => {
              closeSidebar();
            }}
            className={`${
              pathname === "/resume" && "text-accent"
            } font-medium `}
          >
            Resume
          </Link>
        </nav>
      </div>
      <div
        className="flex-1"
        onClick={() => closeSidebar()}
      ></div>
    </div>
  );
};

export default MobileMenu;
