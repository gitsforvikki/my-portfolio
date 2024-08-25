import { SubHeading } from "../commonComponents";
import { education, experience } from "./constant";
import { EducationTimeline } from "./education/EducationTimeline";
import { ExperienceTimeline } from "./experience/ExperienceTimeline";

export const Resume = () => {
  return (
    <div className="container mx-auto">
      {/* <div className="flex justify-center mb-16 ">
        <SubHeading SubHeadingText="Resume" />
      </div> */}
      <div className="flex flex-col sm:flex-row justify-center  ">
        <EducationTimeline education={education} />
        <ExperienceTimeline experience={experience} />
      </div>
    </div>
  );
};
