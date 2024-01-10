import React from "react";
import SkillsCard from "./SkillsCard";


const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        <SkillsCard title={"ReactJs"} value={75} />
        <SkillsCard title={"NextJs"} value={50} />
        <SkillsCard title={"Tailwind css"} value={80} />
        <SkillsCard title={"NodeJs"} value={70} />
        <SkillsCard title={"MongoDB"} value={35} />
        <SkillsCard title={"ExpressJs"} value={60} />
        <SkillsCard title={"C++, Python"} value={90} />
        <SkillsCard title={"Material UI"} value={50} />
      </div>
    </div>
  );
};

export default SkillsSection;