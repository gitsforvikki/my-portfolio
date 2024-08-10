export const SubHeading = ({ SubHeadingText }: { SubHeadingText: string }) => {
  return (
    <div className="flex flex-col gap-y-7">
      <h2 className="text-white text-4xl leading-5 ">{SubHeadingText}</h2>
      <div className="bg-gray-600 w-[150px] h-[6px] rounded-xl flex justify-center">
        <div className="bg-primary w-[75px] h-[6px] rounded-xl" />
      </div>
    </div>
  );
};
