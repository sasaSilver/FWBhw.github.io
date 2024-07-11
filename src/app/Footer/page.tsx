"use client";
import React, { FC } from "react";
import Link from "next/link";
export const runtime = "edge";
const Footer: FC<{}> = () => {
  return (
    <>
      <nav className="navbar-list">
        <img id="menu-icon" src="images/menu-icon.png" alt="menu-icon" />
        <Link className="hover-yellow" href="/">
          Home
        </Link>
        <Link className="hover-yellow" href="./About">
          About
        </Link>
        <Link className="hover-yellow" href="./Projects">
          Portfolio
        </Link>
        <Link className="hover-yellow" href="./Contacts">
          Contacts
        </Link>
        <Link className={"comic-link"} href={"./Comic"}>
          Show funny comic from homework!!!
        </Link>
      </nav>
    </>
  );
};

export default Footer;
