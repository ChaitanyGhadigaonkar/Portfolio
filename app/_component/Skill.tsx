import React from "react";
import { IconType } from "react-icons";

const Skill = ({ name, Icon }: { name: string; Icon: IconType | string }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      {typeof Icon === "string" ? (
        <div dangerouslySetInnerHTML={{ __html: Icon }}></div>
      ) : (
        <Icon className="text-head h-10 w-10 lg:h-16 lg:w-16" />
      )}
      <p className="text-light text-xs lg:text-base">{name}</p>
    </div>
  );
};

export default Skill;
