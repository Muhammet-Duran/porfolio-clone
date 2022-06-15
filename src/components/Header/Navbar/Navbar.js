import styles from "./Navbar.module.css";
// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar({ menuOpen, menuToggle }) {
  console.log(menuOpen);
  const [activeLink, setActiveLink] = useState(true);
  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.nav_fixed : ""}`}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link
            to="home"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            Home
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="about"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            About
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="service"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            Service
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="portfolio"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            Portfolio
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="blog"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            Blog
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="contact"
            className={styles.nav_link}
            activeClass="active"
            spy={true}
            smooth={false}
            offset={-100}
            duration={500}
            onClick={menuToggle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
