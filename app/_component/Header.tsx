"use client";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "./ui/Button";
import { useSidebarContext } from "../context/SidebarContext";

const Header = () => {
  const pathname = usePathname();
  const { openSidebar, sidebarState } = useSidebarContext();
  return (
    <div className="px-1 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="logo text-head text-xl font-semibold"
      >
        Chaitany Ghadigaonkar
      </Link>
      <nav className="items-center gap-8 hidden sm:flex">
        <Link
          href={"/"}
          className={`${pathname === "/" && "text-accent"} font-medium `}
        >
          Home
        </Link>
        <Link
          href={"/projects"}
          className={`${
            pathname === "/projects" && "text-accent"
          } font-medium `}
        >
          Projects
        </Link>
        <Link
          href={"/about"}
          className={`${pathname === "/about" && "text-accent"} font-medium `}
        >
          About
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1BVPPNJh334hAQCBfD6T4vcHgc_oWgfAu/view?usp=sharing"
          }
          className={`${pathname === "/resume" && "text-accent"} font-medium `}
        >
          Resume
        </Link>
      </nav>
      <Button
        size={"icon"}
        className="sm:hidden"
        onClick={() => openSidebar()}
      >
        <FaBars
          width={30}
          height={30}
        />
      </Button>
    </div>
  );
};

export default Header;
