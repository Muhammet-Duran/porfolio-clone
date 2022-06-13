import {useState} from "react";
import styles from "./Portfolio.module.css";
import cn from "classnames";
import {portfolioImg1,portfolioImg2,portfolioImg3,portfolioImg4} from "./../../assets/Index";
import Button from "components/ui/Button/Button";
const PortfolioList = [
  {
      image: portfolioImg1,
      category: 'Development',
      title: 'Getting tickets to the big show'
  },
  {
      image:portfolioImg2,
      category: 'Development',
      title: 'Getting tickets to the big show'
  },
  {
      image: portfolioImg3,
      category: 'Development',
      title: 'Getting tickets to the big show'
  },
  {
      image: portfolioImg4,
      category: 'Development',
      title: 'Getting tickets to the big show'
  },
  {
      image: portfolioImg1,
      category: 'Development',
      title: 'Getting tickets to the big show'
  },
  {
      image: portfolioImg2,
      category: 'Development',
      title: 'Getting tickets to the big show'
  }
]
 

function Portfolio() {
  const [portfolio, setPortfolio] = useState(PortfolioList);
  return (
    <div id="portfolio">
      <div className={cn("section-wrapper", styles.portfolio_wrapper)}>
        <div className={cn("container",styles.wrapper)}>
            <div className={styles.content_title_area}>
              <h2 className={styles.title}>My Latest Project</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
              </p>
            </div>
            <div className={styles.grid_area}>
              {portfolio.map((item, i)=>(
                <div className={styles.gridItem} key={i}>
                  <div className={styles.portfolio}>
                    <div className={styles.item_thumbnail}>
                      <div className={`${styles.thumbnail_inner} ${styles.image_1}`} style={{backgroundImage: `url(${item.image})`}}></div>
                      <div className={`${styles.bg_blur_img} ${styles.image_1}`} style={{backgroundImage: `url(${item.image})`}}></div>
                    </div>
                    <div className={styles.item_content}>
                      <p className={styles.branch}>{item.category}</p>
                      <h4 className={styles.portfolio_title}>{item.title}</h4>
                      <div className={styles.portfolio_btn}>
                        <Button preferences='detail_btn'>details</Button>
                      </div>
                    </div>
                  </div>
              </div>
              ))}
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio