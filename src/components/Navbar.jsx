"use client";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { navbarItems } from "../../data/navigation";
import { NavItem } from "./NavItem";
import { WishlistContext } from "../context/WishlistContext";
import Link from "next/link";

export const Navbar = () => {
  const currentPath = usePathname();
  const { wishlistCount } = useContext(WishlistContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </Link>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
            />
          ))}
          <li className={styles.wishlistBadge} aria-label="Wishlist">
            <Badge count={wishlistCount}>
              <Planet color="white" />
            </Badge>
          </li>
        </ul>
      </nav>
    </header>
  );
};
