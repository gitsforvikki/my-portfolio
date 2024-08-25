import Image from "next/image";
import { eachDataTypes } from "./constant";

export const InfoCard = ({ eachInfoData }: eachDataTypes) => {
  const { name, image, value } = eachInfoData;
  return (
    <div className="flex items-center gap-x-4 group">
      <div className="">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="border-[1px] border-primary-light group-hover:border-primary p-2 rounded-full"
        />
      </div>
      <div className="text-gray-400 text-base ">
        <h2 className="group-hover:text-primary">{name}</h2>
        <h2 className="group-hover:text-primary">{value}</h2>
      </div>
    </div>
  );
};
