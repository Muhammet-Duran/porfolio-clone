import styles from "./CardDetail.module.css";
import Button from "../Button/Button";
function CardDetail({ item }) {
  return (
    <div className={styles.card_detail}>
      <Button to="/" preferences="detail_btn">
        Home
      </Button>
      <img className={styles.card_img} alt="img" src={item.image} />
      <p className={styles.card_description}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.There are many variations of passages
        of Lorem Ipsum available, but the majority have suffered
        alteration.There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration.
      </p>
    </div>
  );
}

export default CardDetail;
