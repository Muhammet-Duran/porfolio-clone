import styles from "./Logo.module.css";
import Logo from "assets/target.png";

function LogoArea() {
  return (
    <div className={styles.logo_box}>
      <img src={Logo} alt="logo" style={{ display: "block", width: "100%" }} />
    </div>
  );
}

export default LogoArea;
