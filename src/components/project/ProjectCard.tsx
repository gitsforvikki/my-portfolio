import Image from "next/image";
import { projectPropsType } from "./constant";

export const ProjectsCard = ({ eachProject }: projectPropsType) => {
  return (
    <div className="max-w-[400px] w-full border-[1px] border-primary-light p-4 rounded-xl">
      <Image
        src={eachProject.image}
        alt={eachProject.title}
        width={200}
        height={200}
        className="w-[350px] h-[200px] rounded-xl"
      />
      <h2 className="text-3xl text-gray-400 mt-5 mb-3">{eachProject.title}</h2>
      <p className="text-gray-400 text-base">{eachProject.description}</p>
    </div>
  );
};
