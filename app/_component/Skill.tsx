import React from "react";
import { IconType } from "react-icons";

const Skill = ({ name, Icon }: { name: string; Icon: IconType | string }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-between">
      {typeof Icon === "string" ? (
        <div dangerouslySetInnerHTML={{ __html: Icon }}></div>
      ) : (
        <Icon className="w-10 h-10 text-head lg:w-16 lg:h-16" />
      )}
      <p className="text-light text-xs lg:text-base">{name}</p>
    </div>
  );
};

export default Skill;
