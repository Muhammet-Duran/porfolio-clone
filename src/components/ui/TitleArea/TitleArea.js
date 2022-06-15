import styles from "./TitleArea.module.css";
import cn from "classnames";

function TitleArea({ title, description, preferences }) {
  return (
    <div className={cn(styles.content_title_area, styles?.[preferences])}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TitleArea;
