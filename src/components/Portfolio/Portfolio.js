import { useState, useEffect } from "react";

import TitleArea from "components/ui/TitleArea/TitleArea";
import styles from "./Portfolio.module.css";
import cn from "classnames";

import { portfolioData } from "./../../data/Portfolios";
import Button from "components/ui/Button/Button";

function Portfolio({ page }) {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    setPortfolio(portfolioData);
  }, []);
  const sectionTitle = "My Latest Project";
  const sectionDescription =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";

  const mapData = !page ? portfolio.slice(0, 6) : portfolio;
  return (
    <div id="portfolio">
      <div className={cn("section-wrapper", styles.portfolio_wrapper)}>
        <div className={cn("container", styles.wrapper)}>
          {!page ? (
            <TitleArea title={sectionTitle} description={sectionDescription} />
          ) : (
            <div className={styles.portfolio_bottom_area}>
              <Button to="/" preferences="r_more_btn">
                Home
              </Button>
            </div>
          )}
          <div className={styles.grid_area}>
            {mapData.map((item) => (
              <div className={styles.gridItem} key={item.id}>
                <div className={styles.portfolio}>
                  <div className={styles.item_thumbnail}>
                    <div
                      className={`${styles.thumbnail_inner} ${styles.image_1}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <img alt="img" src={item.image} />
                    <div
                      className={`${styles.bg_blur_img} ${styles.image_1}`}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                  <div className={styles.item_content}>
                    <p className={styles.branch}>{item.category}</p>
                    <h4 className={styles.portfolio_title}>{item.title}</h4>
                    <div className={styles.portfolio_btn_area}>
                      <Button
                        to={`/project/${item.id}`}
                        preferences="detail_btn"
                      >
                        view details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!page && (
            <div className={styles.portfolio_bottom_area}>
              <Button to="/project" preferences="r_more_btn">
                view more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
