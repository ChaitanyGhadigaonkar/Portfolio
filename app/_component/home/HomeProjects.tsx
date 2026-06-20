import React from "react";

import { projects } from "@/app/_helpers/projects";

import Card from "../Card";

const HomeProjects = () => {
  return (
    <div className="grid grid-cols-1 place-items-center md:my-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card
          key={index}
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
