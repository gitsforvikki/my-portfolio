export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" py-12 bg-secondary">
      <div className="flex justify-center mb-2">
        <div className="w-4/5 h-[1px] bg-gray-200" />
      </div>
      <h1 className="container flex justify-center text-sm text-gray-300">
        {currentYear}. Develop and maintained by Vikash. All right reserved.
      </h1>
    </div>
  );
};
