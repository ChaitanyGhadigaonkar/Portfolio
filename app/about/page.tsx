import React from "react";

import HomeAbout from "../_component/home/About";
import SkillSection from "../_component/home/SkillSection";

const About = () => {
  return (
    <main className="flex h-full flex-col justify-start gap-6 px-1">
      <HomeAbout />
      <h1 className="text-head text-2xl font-semibold">Technologies I Know</h1>
      <SkillSection />
    </main>
  );
};

export default About;
