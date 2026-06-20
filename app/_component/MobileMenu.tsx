"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";

import { useSidebarContext } from "../context/SidebarContext";

const MobileMenu = () => {
  const pathname = usePathname();
  const { closeSidebar, sidebarState } = useSidebarContext();
  return (
    <div
      className={`overlay fixed inset-0 z-20 flex min-h-screen w-full bg-[#33333380] transition-transform duration-700 ${
        sidebarState ? "translate-x-0" : "-translate-x-full"
      } sm:hidden`}
    >
      <div
        className={`xs:w-3/4 h-full w-full bg-slate-50 duration-500 ${
          sidebarState ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="item-center flex w-full justify-between px-3 py-4">
          <Link
            href={"/"}
            onClick={() => {
              closeSidebar();
            }}
            className="logo text-head text-xl font-semibold"
          >
            Chaitany Ghadigaonkar
          </Link>
          <FaX className="text-head my-1 text-xl" onClick={() => closeSidebar()} />
        </header>
        <nav className="flex flex-col items-start gap-6 px-5 py-4">
          <Link
            href={"/"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/" && "text-accent"} font-medium`}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/projects" && "text-accent"} font-medium`}
          >
            Projects
          </Link>
          <Link
            href={"/about"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/about" && "text-accent"} font-medium`}
          >
            About
          </Link>
          <Link
            href={"https://drive.google.com/file/d/1OrEWxMZVEIV88Fuk2d0AI3cYpbhkHQEo/view"}
            onClick={() => {
              closeSidebar();
            }}
            className={`${pathname === "/resume" && "text-accent"} font-medium`}
          >
            Resume
          </Link>
        </nav>
      </div>
      <div className="flex-1" onClick={() => closeSidebar()}></div>
    </div>
  );
};

export default MobileMenu;
