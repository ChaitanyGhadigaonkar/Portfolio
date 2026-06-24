import { Metadata } from "next";
import React from "react";

import HomeAbout from "../_component/home/About";
import SkillSection from "../_component/home/SkillSection";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <main className="flex h-full flex-col justify-start gap-6">
      <HomeAbout />
      <h3 className="text-head text-4xl font-semibold">Technologies I Know</h3>
      <SkillSection />
    </main>
  );
};

export default About;
