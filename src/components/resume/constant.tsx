export type dataType = {
  date: string;
  title: string;
  institute: string;
  description: string;
};

export type educationPropsType = {
  education: dataType[];
};

export type experiencePropsType = {
  experience: dataType[];
};

export const education = [
  {
    date: "2017-2021",
    title: "Bachelor of Technology in Information Technology",
    institute: "MRSPTU, Punjab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    date: "2015-2017",
    title: "Intermediate Of Science ",
    institute: "BBN, college, Gopalganj, Bihar",
    description: "Description for event 2",
  },
  {
    date: "2014",
    title: "Matriculation",
    institute: "High School, Kusaundhi, Gopalganj",
    description: "Description for event 3",
  },
];

export const experience = [
  {
    date: "2017-2021",
    title: "Bachelor of Technology in Information Technology",
    institute: "MRSPTU, Punjab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
];
