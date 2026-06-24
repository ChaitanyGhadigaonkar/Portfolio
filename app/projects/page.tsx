import { Metadata } from "next";

import HomeProjects from "../_component/home/HomeProjects";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <main className="flex h-full flex-col justify-start gap-6">
      <h3 className="text-head text-4xl font-semibold">Projects</h3>
      <HomeProjects />
    </main>
  );
};

export default Projects;
