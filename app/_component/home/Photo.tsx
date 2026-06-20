import Image from "next/image";
import React from "react";

import { My_image } from "@/app/_helpers/projects";

const Photo = () => {
  return <Image src={My_image} alt="my_image" className="h-42 w-42 items-center justify-center rounded-full" />;
};

export default Photo;
