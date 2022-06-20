import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
import cn from "classnames";
function Button({ children, preferences, to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={cn(styles.btn, styles?.[preferences])}
    >
      {children}
    </button>
  );
}

export default Button;
