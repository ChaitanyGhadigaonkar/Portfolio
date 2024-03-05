import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { My_image } from "@/app/_helpers/projects";
import Link from "next/link";
import Photo from "./Photo";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-3 flex-2 h-hero-content-sm sm:flex-row-reverse sm:items-center md:h-hero-content-md">
      <div className="flex flex-1 items-center justify-center ">
        <Photo />
      </div>
      <div className="flex flex-1 flex-col gap-2 sm:w-1/2">
        <h1 className="text-head text-2xl font-bold leading-8 md:text-3xl">
          Hello 👋, I&apos;m Chaitany Ghadigaonkar
        </h1>
        <p className="text-pretty text-sm text-light md:text-base">
          I am a computer engineering student with a passion for building
          interactive and engaging web applications. With a strong foundation in
          both front-end and back-end development, I am constantly learning and
          pushing boundaries to create meaningful digital experiences. Let's
          discuss your next project!
        </p>
        <div className="buttons flex w-full gap-2 items-center my-2">
          <Button
            variant="primary"
            className="text-sm font-semibold px-3 py-2.5 md:text-base"
          >
            Let&apos;s Work Together
          </Button>
          <Button
            variant="outline"
            className="text-sm font-semibold px-3 py-2.5 md:text-base"
          >
            <Link href="/projects">My Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
