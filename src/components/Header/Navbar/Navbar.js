import styles from "./Navbar.module.css";
import {useState} from  "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState(true);
  return (
   <nav className={styles.nav}>
    <ul className={styles.nav_list}>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>Home</a>
      </li>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>About</a>
      </li>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>Service</a>
      </li>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>Portfolio</a>
      </li>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>Blog</a>
      </li>
      <li className={styles.nav_item}>
        <a href="#" className={styles.nav_link}>Contact</a>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar