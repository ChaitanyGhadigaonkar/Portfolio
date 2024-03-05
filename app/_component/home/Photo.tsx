import { My_image } from "@/app/_helpers/projects";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <Image
      src={My_image}
      alt="my_image"
      className="w-42 h-42 items-center justify-center rounded-full"
    />
  );
};

export default Photo;
