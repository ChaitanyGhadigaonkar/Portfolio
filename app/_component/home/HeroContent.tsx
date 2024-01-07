import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      <Image
        width={150}
        height={150}
        src={""}
        alt="Chaitany Ghadigaonkar"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-head text-2xl font-bold leading-8">
          Hello 👋, I'm Chaitany Ghadigaonkar
        </h1>
        <p className="text-pretty text-sm text-light">
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
            className="text-sm font-semibold px-3 py-2.5"
          >
            Let's Work Together
          </Button>
          <Button
            variant="outline"
            className="text-sm font-semibold px-3 py-2.5"
          >
            My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
