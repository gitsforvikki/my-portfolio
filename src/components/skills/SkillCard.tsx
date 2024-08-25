import Image from "next/image";
import React from "react";

interface skillData {
  title: string;
  image: string;
  description: string;
}

export const SkillCard: React.FC<{ skillData: skillData }> = ({
  skillData,
}) => {
  const { title, image, description } = skillData;
  return (
    <div className="max-w-[500px] bg-[#101624] rounded-2xl">
      <div className=" group py-8 px-10 flex flex-col gap-y-4 items-center ">
        <Image
          src={image}
          alt="skill"
          width={90}
          height={90}
          className="border-[2px] border-gray-500 rounded-full p-1 group-hover:border-primary "
        />
        <h2 className=" group-hover:text-primary text-2xl text-gray-300">
          {title}
        </h2>
        <p className="text-gray-400 text-center">{description}</p>
      </div>
    </div>
  );
};
