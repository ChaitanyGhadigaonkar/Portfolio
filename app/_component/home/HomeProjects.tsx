import React from "react";

import { projects } from "@/app/_helpers/projects";

import Card from "../Card";

const HomeProjects = () => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-10">
      {projects.map((project) => (
        <Card
          key={project.title}
          image={project.image}
          title={project.title}
          features={project.features}
          gif={project.image}
          gitHubLink={project.gitHubLink}
        />
      ))}
    </div>
  );
};

export default HomeProjects;
