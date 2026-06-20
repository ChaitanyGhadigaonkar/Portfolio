import React from "react";

import HomeProjects from "../_component/home/HomeProjects";

const Projects = () => {
  return (
    <main className="flex h-full flex-col justify-start gap-6 px-1">
      <h1 className="text-head mx-auto text-2xl font-semibold">My Projects</h1>
      <HomeProjects />
    </main>
  );
};

export default Projects;
