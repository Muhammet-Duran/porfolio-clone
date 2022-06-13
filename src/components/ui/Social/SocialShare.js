import styles from "./SocialShare.module.css";
import {Icon} from "Icons";

function SocialShare() {
  return (
    <nav className={styles.nav_social}>
        <ul className={styles.social_list}>
            <li className={styles.social_item}>
                <a href="#" className={styles.social_link}>
                    <Icon name="facebook" size={16}/>
                </a>
            </li>
            <li className={styles.social_item}>
                <a href="#" className={styles.social_link}>
                    <Icon name="linkedin" size={16}/>
                </a>
            </li>
            <li className={styles.social_item}>
                <a href="#" className={styles.social_link}>
                    <Icon name="instagram" size={16}/>
                </a>
            </li>
            <li className={styles.social_item}>
                <a href="#" className={styles.social_link}>
                    <Icon name="twitter" size={16}/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default SocialShare