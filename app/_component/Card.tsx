import Image, { StaticImageData } from "next/image";
import React from "react";
import { projects } from "../_helpers/projects";

const Card = ({
  image,
  gif,
  title,
  features,
}: {
  image: StaticImageData | string;
  gif: StaticImageData | string;
  title: string;
  features: string[];
}) => {
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden">
      <div className="top">
        <Image
          width={600}
          height={450}
          src={image}
          alt={title}
          className={`h-40 w-68 aspect-video rounded-2xl`}
        />
        {/* <Image width={150} height={150} src={""} alt={title}/> 
        TODO:for the gif */}
        {/* TODO: Animation for the image slightly up and down */}
      </div>
      <div className="content my-4 mx-3">
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
    </div>
  );
};

export default Card;
