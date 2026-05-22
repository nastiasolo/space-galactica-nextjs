import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";
import classNames from "classnames";

export const NavItem = ({ id, title, link, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{id}</b> {title}
      </Link>
    </li>
  );
};
