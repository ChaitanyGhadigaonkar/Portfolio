import React from "react";
import Card from "../Card";
import { projects } from "@/app/_helpers/projects";

const HomeProjects = () => {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:my-4">
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
