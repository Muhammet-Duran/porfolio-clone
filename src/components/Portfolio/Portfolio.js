import { useState } from "react";
import TitleArea from "components/ui/TitleArea/TitleArea";
import styles from "./Portfolio.module.css";
import cn from "classnames";
import {
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioImg4,
} from "./../../assets/Index";
import Button from "components/ui/Button/Button";
const PortfolioList = [
  {
    id: 1,
    image: portfolioImg1,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    id: 2,
    image: portfolioImg2,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    id: 3,
    image: portfolioImg3,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    id: 3,
    image: portfolioImg4,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    id: 4,
    image: portfolioImg1,
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    id: 5,
    image: portfolioImg2,
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

function Portfolio() {
  const [portfolio] = useState(PortfolioList);
  const sectionTitle = "My Latest Project";
  const sectionDescription =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";
  return (
    <div id="portfolio">
      <div className={cn("section-wrapper", styles.portfolio_wrapper)}>
        <div className={cn("container", styles.wrapper)}>
          <TitleArea title={sectionTitle} description={sectionDescription} />
          <div className={styles.grid_area}>
            {portfolio.map((item) => (
              <div className={styles.gridItem} key={item.id}>
                <div className={styles.portfolio}>
                  <div className={styles.item_thumbnail}>
                    <div
                      className={`${styles.thumbnail_inner} ${styles.image_1}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div
                      className={`${styles.bg_blur_img} ${styles.image_1}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                  <div className={styles.item_content}>
                    <p className={styles.branch}>{item.category}</p>
                    <h4 className={styles.portfolio_title}>{item.title}</h4>
                    <div className={styles.portfolio_btn_area}>
                      <Button preferences="detail_btn">view details</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.portfolio_bottom_area}>
            <Button preferences="r_more_btn">view more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
