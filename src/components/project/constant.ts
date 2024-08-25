import social from "../../../public/projects/social.jpg";
import ecommerce from "../../../public/projects/ecommerce.jpg";
import { StaticImageData } from "next/image";

export type projectPropsType = {
  eachProject: {
    title: string;
    image: StaticImageData;
    description: string;
  };
};

export const projectsData = [
  {
    title: "E commerce website",
    image: ecommerce,
    description:
      "Shop-Now is an e-commerce website.it's a fully MERN stack Application. Here you can get men,womens & kids products and shop accordingly.",
  },
  {
    title: "Social website",
    image: social,
    description:
      "React social web application is like a professional social media application. it's a fully MERN stack Application.It's a social community of developers, where you can also join.",
  },
  {
    title: "Event Booking",
    image: social,
    description:
      "Event-Now web application is an online event booking application. This web Project is made for implementing user authentication and authorization. it's a fully MERN stack Application.where you can also check it.",
  },
];
