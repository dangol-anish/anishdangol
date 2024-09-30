import React from "react";
import { Dock } from "./Dock";

function SkillSection() {
  return (
    <div className="py-20 px-10">
      <h1 id="skillset-section" className="heading pb-5 text-white">
        Explore my <span className="text-violet-500">Skillset</span>
      </h1>
      <Dock />
    </div>
  );
}

export default SkillSection;
