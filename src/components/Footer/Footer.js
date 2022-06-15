import styles from "./Footer.module.css";

import LogoArea from "components/ui/Logo/LogoArea";
import SocialShare from "components/ui/Social/SocialShare";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <LogoArea />
        <div className={`${styles.social_area} ${styles.section}`}>
          <SocialShare preferences="footer_social_link" />
        </div>
        <div className={`${styles.copyright} ${styles.section}`}>
          <p>Copyright &copy; Rainbow-Themes. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
