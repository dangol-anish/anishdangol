import React from "react";
import { Dock } from "./Dock";

function SkillSection() {
  return (
    <div className="py-20">
      <h1 className="heading pb-5">
        Explore my <span className="text-violet-500">Skillset</span>
      </h1>
      <Dock />
    </div>
  );
}

export default SkillSection;
