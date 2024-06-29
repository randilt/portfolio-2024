import React from "react";
import { LayoutGridDemo } from "./ProjectsGrid";

const ProjectsSection = () => {
  return (
    <div>
      {" "}
      <div className=" text-white py-12 text-6xl font-bold text-center">
        <h1>Projects</h1>
      </div>
      <LayoutGridDemo />
    </div>
  );
};

export default ProjectsSection;
