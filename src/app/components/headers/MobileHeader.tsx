"use client";
import Image from "next/image";
import menu from "../../../../public/menu.svg";
import { HeaderLogo } from "../logo/HeaderLogo";
import { useEffect, useState } from "react";
import { MenuList } from "./MenuList";

export const MobileHeader = () => {
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

  const [visible, setVisible] = useState(false);
  return (
    <main
      className={`lg:hidden py-4  fixed top-0 left-0 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-black" : "bg-transparent"} z-50`}
    >
      <section className="  relative">
        <div className=" container mx-auto px-2 flex justify-between items-center">
          <HeaderLogo />
          <div onClick={() => setVisible(!visible)}>
            <Image src={menu} alt="menubar" width={60} height={60} />
          </div>
        </div>
        <div
          className={` bg-secondary ${
            visible ? "block" : "hidden"
          } absolute top-[120%] w-full`}
        >
          <MenuList />
        </div>
      </section>
    </main>
  );
};
