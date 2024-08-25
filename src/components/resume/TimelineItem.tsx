import { dataType } from "./constant";

export const TimelineItem = ({
  date,
  title,
  institute,
  description,
}: dataType) => (
  <div className="relative flex items-start pb-8 group">
    {/* Vertical line container */}
    <div className="absolute w-[2px] bg-gray-700 left-4 top-0 bottom-0" />

    {/* Indicator circle */}
    <div className="w-3 h-3 bg-gray-700 group-hover:bg-primary rounded-full absolute left-[14px] top-0" />

    {/* Content container */}
    <div className="pl-6">
      <div className="pl-4">
        <h3 className="text-primary text-xl xl:w-[80%]">{title}</h3>
        <div className="text-[20px] font-medium text-gray-400 mt-2">{date}</div>
        <div className="text-[20px] font-medium text-gray-400 my-4">
          {institute}
        </div>
        <p className="text-gray-400 text-[18px] xl:w-[75%]">{description}</p>
      </div>
    </div>
  </div>
);
