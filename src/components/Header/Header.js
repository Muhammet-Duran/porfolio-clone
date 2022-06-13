import Navbar from "./Navbar/Navbar";
import SocialShare from "components/ui/Social/SocialShare";
import Button from "components/ui/Button/Button";
import styles from "./Header.module.css";
import Logo from "assets/logo.png";


function Header() {
  return (
    <div className={styles.header_area}>
      <div className={styles.h_wrapper}>
        <div className={styles.header_section}>
          <div className={styles.header_logo}>
            <img src={Logo} alt="logo"></img>
          </div>
          <Navbar />
        </div>
         <div className={styles.header_section}>
         <SocialShare />
         <Button preferences='buy_btn'>BUY NOW</Button>
        </div>
      </div>
    </div>
  )
}

export default Header