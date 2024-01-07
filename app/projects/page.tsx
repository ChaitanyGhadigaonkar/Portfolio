import React from "react";
import HomeProjects from "../_component/home/HomeProjects";

const Projects = () => {
  return (
    <main className="px-1 flex justify-start gap-6 flex-col h-full">
      <h1 className="mx-auto text-head text-2xl font-semibold">My Projects</h1>
      <HomeProjects />
    </main>
  );
};

export default Projects;
