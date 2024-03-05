import Image, { StaticImageData } from "next/image";
import React from "react";
import { projects } from "../_helpers/projects";
import Link from "next/link";

const Card = ({
  image,
  gif,
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
    <Link
      href={gitHubLink}
      target="_blank"
      className="flex flex-col gap-2 w-full overflow-hidden sm:my-4"
    >
      <div className="top flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          className={`w-80 h-56 sm:w-full lg:w-10/12 object-contain  rounded-2xl `}
        />
        {/* <Image width={150} height={150} src={""} alt={title}/> 
        TODO:for the gif */}
        {/* TODO: Animation for the image slightly up and down */}
      </div>
      <div className="content my-4 mx-3 sm:mx-10 lg:mx-20">
        <h3 className="text-head font-semibold text-lg">{title}</h3>
        <div className="gap-2">
          {features.map((feature, index) => (
            <p
              key={index}
              className="capitalize text-light text-sm"
            >
              {feature} {index !== projects.length - 1 && "|"}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
