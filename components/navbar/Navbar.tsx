"use client";
import React from "react";
import { Link } from "react-router-dom";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image
        className="rounded-xl sm:size-50 lg:size-100 mx-auto"
        src="/photos/LOGO.jpg"
        alt="photos"
        width={40}
        height={30}
      />
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
