import React from "react";
import Card from "../Card";
import { MERN_STORE, projects } from "@/app/_helpers/projects";

const HomeProjects = () => {
  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 sm:my-4">
      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          features={project.features}
          gif={project.image}
        />
      ))}
    </div>
  );
};

export default HomeProjects;
