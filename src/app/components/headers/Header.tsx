"use client";

import { useEffect, useState } from "react";
import { HeaderLogo } from "../logo/HeaderLogo";
import Link from "next/link";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine if scrolling down or up
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }

    // Update the scroll position and navbar background
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main
      className={`hidden lg:block py-4 fixed top-0 left-0 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-black" : "bg-transparent"} z-50`}
    >
      <section className="container mx-auto py-3  ">
        <div className=" flex justify-around items-center">
          <div className="">
            <HeaderLogo />
          </div>
          <div className="w-1/2">
            <ul className="flex justify-evenly">
              <Link href="/">
                <li className=" text-primary px-1 uppercase text-base font-medium hover:text-primary">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="px-1  uppercase text-base font-medium hover:text-primary">
                  About
                </li>
              </Link>
              <li className="px-1 uppercase text-base font-medium hover:text-primary">
                resume
              </li>
              <li className="px-1 uppercase text-base font-medium hover:text-primary">
                contact
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
