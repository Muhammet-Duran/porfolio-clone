import styles from "./Button.module.css";
import cn from "classnames";
function Button({children, preferences}) {
  return (
    <button className={cn(styles.btn, styles?.[preferences])}>{children}</button>
  )
}

export default Button