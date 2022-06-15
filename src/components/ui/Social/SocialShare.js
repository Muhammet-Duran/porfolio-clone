import styles from "./SocialShare.module.css";
import { Icon } from "Icons";
import cn from "classnames";

function SocialShare({ preferences }) {
  return (
    <nav className={styles.nav_social}>
      <ul className={styles.social_list}>
        <li className={styles.social_item}>
          <a href="#" className={cn(styles.social_link, styles?.[preferences])}>
            <Icon name="facebook" size={16} />
          </a>
        </li>
        <li className={styles.social_item}>
          <a href="#" className={cn(styles.social_link, styles?.[preferences])}>
            <Icon name="linkedin" size={16} />
          </a>
        </li>
        <li className={styles.social_item}>
          <a href="#" className={cn(styles.social_link, styles?.[preferences])}>
            <Icon name="instagram" size={16} />
          </a>
        </li>
        <li className={styles.social_item}>
          <a href="#" className={cn(styles.social_link, styles?.[preferences])}>
            <Icon name="twitter" size={16} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialShare;
