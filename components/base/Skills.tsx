import React from "react";
import { EvervaultCardDemo } from "./Card";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className=" text-white py-12 text-6xl font-bold text-center">
        <h1>Skills</h1>
      </div>
      <div className="grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3 max-w-full px:4 md:px-64">
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
        <EvervaultCardDemo text="Skills" icon={<FaReact />} />
      </div>
    </>
  );
};

export default Skills;
