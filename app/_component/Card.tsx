import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import { projects } from "../_helpers/projects";

type Props = {
  image: StaticImageData | string;
  gif: StaticImageData | string;
  title: string;
  features: string[];
  gitHubLink: string;
};

const Card: FC<Props> = ({ image, title, features, gitHubLink }) => {
  return (
    <Link href={gitHubLink} target="_blank" className="flex w-full flex-col items-start gap-4">
      <Image src={image} alt={title} className={`aspect-video rounded-xl`} />
      <div className="flex flex-col gap-2">
        <h3 className="text-head text-lg font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <p key={feature} className="text-light text-sm capitalize">
              {feature} {index !== projects.length - 1 && "|"}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
