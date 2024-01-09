import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { My_image } from "@/app/_helpers/projects";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-3 flex-2 h-hero-content-sm sm:flex-row-reverse sm:items-center md:h-hero-content-md">
      <div className="w-44 h-44 mx-auto my-4 md:w-56 md:h-56 md:flex-1 md:mx-5 md:my-0">
        <Image
          width={150}
          height={150}
          src={My_image}
          alt="Chaitany Ghadigaonkar"
          className="w-44 h-44 mx-auto my-4 sm:w-44 sm:h-44 sm:my-0 lg:w-56 lg:h-60"
        />
      </div>
      <div className="flex flex-col gap-2 sm:w-1/2">
        <h1 className="text-head text-2xl font-bold leading-8 md:text-3xl">
          Hello 👋, I&apos;m Chaitany Ghadigaonkar
        </h1>
        <p className="text-pretty text-sm text-light md:text-base">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="text-head font-semibold leading-6">
            adipisicing elit
          </span>
          . Unde hic cupiditate sequi quia! Debitis, voluptates eos voluptatum
          ad praesentium quaerat cumque dolorum doloribus libero minus.
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
            My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
