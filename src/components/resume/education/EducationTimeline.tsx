import Image from "next/image";
import { dataType, educationPropsType } from "../constant";
import { TimelineItem } from "../TimelineItem";
import icon from "../../../../public/resume/education-icon.svg";

export const EducationTimeline = ({ education }: educationPropsType) => {
  return (
    <div className="pt-10">
      <div className=" flex items-center gap-x-2 mb-12">
        <Image src={icon} alt="education icon" width={60} height={60} />
        <h2 className="text-4xl text-primary-light hover:cursor-pointer">
          Education
        </h2>
      </div>
      {education.map((event: dataType, index: number) => (
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
