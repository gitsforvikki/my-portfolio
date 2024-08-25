import Image from "next/image";
import { SubHeading } from "../../components/commonComponents";
import Profile from "../../../public/priofle.png";
import downloadIcon from "../../../public/download-icon.svg";
import React from "react";
import { informaton } from "@/constant";

export default function AboutUsPage() {
  return (
    <main className="bg-secondary min-h-screen">
      <section className="container pt-[15%]">
        <div className="flex justify-center mb-16 ">
          <SubHeading SubHeadingText="About Me" />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 lg:py-20">
          <div className="hidden md:block">
            <Image
              src={Profile}
              width={500}
              height={100}
              alt="Profile Image"
              className="rounded-lg "
            />
          </div>
          <div className="flex justify-center md:hidden">
            <Image
              src={Profile}
              width={500}
              height={100}
              alt="Profile Image"
              className="rounded-lg "
            />
          </div>
          <div className=" flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-white text-3xl md:text-4xl ">
                Hi There! I'm Vkash Kumar
              </h1>
              <h3 className="text-primary text-2xl  md:text-3xl">
                Web Developer
              </h3>
              <p className="text-gray-500 text-lg">
                I am a Visual Designer with a strong focus on digital branding.
                Visul design seeks to attract, inspire, create desires and
                otivate people to respond to messages, with a view to making a
                favorable impact.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <ul className="flex flex-col gap-y-3">
                {informaton.map((item) => (
                  <li key={item.title} className="text-xl text-gray-200">
                    <div className="flex">
                      <span className="w-36"> {item.title}</span>:
                      <span className="ml-3">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="">
                <button className=" flex items-center gap-x-1 bg-primary rounded-3xl py-2 px-5">
                  <Image
                    src={downloadIcon}
                    width={25}
                    height={25}
                    alt="donwnload-icon"
                  />{" "}
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
