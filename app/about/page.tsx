import React from "react";
import HomeAbout from "../_component/home/About";
import SkillSection from "../_component/home/SkillSection";

const About = () => {
  return (
    <main className="px-1 flex justify-start gap-6 flex-col h-full">
      <HomeAbout />
      <h1 className="text-2xl text-head font-semibold">Technologies I Know</h1>
      <SkillSection />
    </main>
  );
};

export default About;
