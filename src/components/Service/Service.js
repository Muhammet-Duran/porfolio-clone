import { useState, useEffect } from "react";
import { serviceData } from "data/Services";
import TitleArea from "components/ui/TitleArea/TitleArea";
import styles from "./Service.module.css";
import cn from "classnames";

const sectionTitle = "My Awesome Service";
const sectionDescription =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";
function Service() {
  const [service, setService] = useState([]);
  useEffect(() => {
    setService(serviceData);
  }, []);
  return (
    <div id="service">
      <div className={cn("section-wrapper")}>
        <div className={cn("container", styles.wrapper)}>
          <TitleArea title={sectionTitle} description={sectionDescription} />
          <div className={styles.service_grid_area}>
            {service.map((item) => (
              <div className={styles.service_item} key={item.id}>
                <div className={styles.service_inner}>
                  <span className={styles.icon}>{item.icon}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
