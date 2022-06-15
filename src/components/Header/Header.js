import { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import Navbar from "./Navbar/Navbar";
import LogoArea from "components/ui/Logo/LogoArea";
import SocialShare from "components/ui/Social/SocialShare";
import Button from "components/ui/Button/Button";
import styles from "./Header.module.css";
import useWindowSize from "components/hooks/useWindowSize";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };
  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  const changeScroll = () => {
    if (window.scrollY >= 90) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", changeScroll);
  return (
    <div
      className={`${styles.header_area} ${
        isSticky ? styles.header_sticky : ""
      }`}
    >
      <div className={styles.h_wrapper}>
        <div className={styles.header_section}>
          <LogoArea />
          <Navbar menuToggle={handleMenuToggle} menuOpen={menuOpen} />
        </div>
        <div className={styles.header_section}>
          <SocialShare />
          <Button preferences="buy_btn">BUY NOW</Button>
          <div className={styles.menu_toggle}>{menuToggle}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
