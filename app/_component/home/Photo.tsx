import Image from "next/image";
import { FC } from "react";

import { My_image } from "@/app/_helpers/projects";
import { cn } from "@/app/lib/utils";

type Props = {
  className?: string;
};

const Photo: FC<Props> = ({ className }) => {
  return (
    <Image src={My_image} alt="my_image" className={cn("h-32 w-32 rounded-full md:min-h-72 md:min-w-72", className)} />
  );
};

export default Photo;
