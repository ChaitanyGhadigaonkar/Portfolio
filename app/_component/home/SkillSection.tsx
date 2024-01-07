import { skills } from "@/app/_helpers/skills";
import React from "react";
import Skill from "../Skill";

const SkillSection = () => {
  return (
    <div className="grid grid-cols-2 space-y-4 place-items-center sm:grid-cols-3 lg:grid-cols-4 lg:space-y-8">
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          name={skill.name}
          Icon={skill.Icon}
        />
      ))}
    </div>
  );
};

export default SkillSection;
