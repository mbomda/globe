import { NavLink } from "react-router-dom";
import styles from "./links.module.css";
import Link from "next/link";
import { title } from "process";

type item = {
  title: string;
  author: string;
  publishDate: string;
  slug: string;
};

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      tilte: "About",
      parth: "/about",
    },
    {
      tilte: "Produits",
      parth: "/produits",
    },
    {
      tilte: "Services",
      parth: "/services",
    },
    {
      tilte: "Blog",
      parth: "/blog",
    },
    {
      tilte: "Contact",
      parth: "/contact",
    },
  ];
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.tilte}></NavLink>
      ))}
    </div>
  );
};
export default Links;
