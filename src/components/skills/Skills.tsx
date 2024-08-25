import React from "react";
import { SkillCard } from "./SkillCard";
import { skills } from "@/constant";

export const Skills = () => {
  return (
    <section className="container">
      <div className="grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {skills?.map((item) => (
          <SkillCard key={item.title} skillData={item} />
        ))}
      </div>
    </section>
  );
};
