import { InfoCard } from "./InfoCard";
import { contactList, headingData } from "./constant";

export const ContactInfo = () => {
  const { heading, subHeading } = headingData;
  return (
    <div className="container mx-auto py-12 md:py-24 w-1/2">
      <div className="mb-5">
        <h2 className="text-gray-400 text-3xl">{heading}</h2>
        <p className="text-gray-400 text-lg">{subHeading}</p>
      </div>
      <div className="flex flex-col gap-y-3">
        {contactList.map((item) => (
          <InfoCard key={item.name} eachInfoData={item} />
        ))}
      </div>
    </div>
  );
};
