import styles from "./Logo.module.css";
import Logo from "assets/logo.png";

function LogoArea() {
  return (
    <div>
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default LogoArea;
