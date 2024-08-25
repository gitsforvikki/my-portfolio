export const SubHeading = ({ SubHeadingText }: { SubHeadingText: string }) => {
  return (
    <div className="md:absolute md:top-[6%]">
      <h1 className="text-[100px] font-bold text-[#151b2980] hidden md:block">
        {SubHeadingText}
      </h1>
      <div className="md:absolute md:top-[25%] md:left-1/2 md:transform md:-translate-x-1/2  ">
        <div className=" flex flex-col gap-y-6 w-[200px]  ">
          <h2 className=" text-3xl leading-5 text-primary ">
            {SubHeadingText}
          </h2>
          <div className="bg-gray-600 w-[150px] h-[2px] rounded-xl flex justify-center">
            <div className="bg-primary w-[75px] h-[3px] rounded-xl items-center" />
          </div>
        </div>
      </div>
    </div>
  );
};
