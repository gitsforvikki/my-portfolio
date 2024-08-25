import { projectsData } from "./constant";
import { ProjectsCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-5 lg:flex-row justify-evenly gap-x-3">
        {projectsData.map((project) => (
          <ProjectsCard key={project.title} eachProject={project} />
        ))}
      </div>
    </div>
  );
};
