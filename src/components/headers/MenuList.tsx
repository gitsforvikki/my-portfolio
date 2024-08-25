"use client";
import Link from "next/link";
import "./style.css";
import { routes } from "../../../routes";

export const MenuList = () => {
  return (
    <main className="container mx-auto px-2">
      <ul className="" id="menuList">
        <Link href={routes.HOME}>
          <li className=" text-primary " id="menuListItem">
            Home
          </li>
        </Link>
        <Link href={routes.ABOUT_US}>
          <li id="menuListItem">About</li>
        </Link>
        <Link href={routes.SKILLS}>
          <li id="menuListItem">Skills</li>
        </Link>
        <Link href={routes.RESUME}>
          <li id="menuListItem">Resume</li>
        </Link>
        <Link href={routes.CONTACT_US}>
          <li id="menuListItem"> Contact</li>
        </Link>
        <Link href={routes.PROJECTS}>
          <li id="menuListItem"> Projects</li>
        </Link>
      </ul>
    </main>
  );
};
