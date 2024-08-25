import Image from "next/image";
import { dataType, experiencePropsType } from "../constant";
import { TimelineItem } from "../TimelineItem";
import icon from "../../../../public/resume/experience-icon.svg";

export const ExperienceTimeline = ({ experience }: experiencePropsType) => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className=" flex items-center gap-x-2 mb-12">
        <Image src={icon} alt="education icon" width={50} height={50} />
        <h2 className="text-4xl text-primary-light">Experience</h2>
      </div>
      {experience.map((event: dataType, index: number) => (
        <TimelineItem
          key={index}
          date={event.date}
          title={event.title}
          institute={event.institute}
          description={event.description}
        />
      ))}
    </div>
  );
};
