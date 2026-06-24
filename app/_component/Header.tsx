"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa6";

import { useSidebarContext } from "../context/SidebarContext";
import Button from "./ui/Button";

const Header = () => {
  const pathname = usePathname();
  const { openSidebar } = useSidebarContext();
  return (
    <div className="flex items-center justify-between py-6 md:py-10">
      <Link href="/" className="logo text-head text-xl font-semibold">
        Chaitany Ghadigaonkar
      </Link>
      <nav className="hidden items-center gap-8 sm:flex">
        <Link href={"/"} className={`${pathname === "/" && "text-accent"} font-medium`}>
          Home
        </Link>
        <Link href={"/projects"} className={`${pathname === "/projects" && "text-accent"} font-medium`}>
          Projects
        </Link>
        <Link href={"/about"} className={`${pathname === "/about" && "text-accent"} font-medium`}>
          About
        </Link>
        <Link
          href={"https://drive.google.com/file/d/1OrEWxMZVEIV88Fuk2d0AI3cYpbhkHQEo/view"}
          className={`${pathname === "/resume" && "text-accent"} font-medium`}
        >
          Resume
        </Link>
      </nav>
      <Button size={"icon"} className="sm:hidden" onClick={() => openSidebar()}>
        <FaBars width={30} height={30} />
      </Button>
    </div>
  );
};

export default Header;
