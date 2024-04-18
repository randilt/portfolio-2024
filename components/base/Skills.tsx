import React from "react";
import { EvervaultCardDemo } from "./Card";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

const Skills = () => {
  return (
    <>
      <div className=" text-white py-12 text-6xl font-bold text-center">
        <h1>Skills</h1>
      </div>
      <div className="grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3 mx-4 max-w-full px:4 md:px-64">
        <EvervaultCardDemo text="NodeJS" icon={<TbBrandNodejs />} />
        <EvervaultCardDemo text="ReactJS" icon={<FaReact />} />
        <EvervaultCardDemo text="NextJS" icon={<SiNextdotjs />} />
        <EvervaultCardDemo text="Express" icon={<SiExpress />} />
        <EvervaultCardDemo text="MongoDB" icon={<SiMongodb />} />
        <EvervaultCardDemo text="Git/GitHub" icon={<FaGitAlt />} />
      </div>
    </>
  );
};

export default Skills;
