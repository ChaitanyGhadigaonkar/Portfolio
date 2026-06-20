import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import { projects } from "../_helpers/projects";

const Card = ({
  image,
  title,
  features,
  gitHubLink,
}: {
  image: StaticImageData | string;
  gif: StaticImageData | string;
  title: string;
  features: string[];
  gitHubLink: string;
}) => {
  return (
    <Link href={gitHubLink} target="_blank" className="flex w-full flex-col gap-2 overflow-hidden sm:my-4">
      <div className="top flex items-center justify-center">
        <Image src={image} alt={title} className={`h-56 w-80 rounded-2xl object-contain sm:w-full lg:w-10/12`} />
        {/* <Image width={150} height={150} src={""} alt={title}/> 
        TODO:for the gif */}
        {/* TODO: Animation for the image slightly up and down */}
      </div>
      <div className="content mx-3 my-4 sm:mx-10 lg:mx-20">
        <h3 className="text-head text-lg font-semibold">{title}</h3>
        <div className="gap-2">
          {features.map((feature, index) => (
            <p key={index} className="text-light text-sm capitalize">
              {feature} {index !== projects.length - 1 && "|"}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
