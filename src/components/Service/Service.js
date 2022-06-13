import styles from "./Service.module.css";
import {useState} from "react";
import cn from "classnames";

import {Icon} from "Icons";

const ServiceList = [
  {
    id : 1,
    icon: <Icon name="service" size={54} />,
      title: 'Business Stratagy',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    id : 2,
    icon: <Icon name="develop" size={54}/>,
      title: 'Website Development',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    id : 3, 
    icon: <Icon name="person" size={54}/>,
      title: 'Marketing & Reporting',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    id : 4, 
    icon: <Icon name="screen" size={54}/>,
      title: 'Mobile App Development',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    id :54, 
    icon: <Icon name="person" size={54}/>,
      title: 'Marketing & Reporting',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    id : 4, 
    icon: <Icon name="screen" size={54}/>,
      title: 'Mobile App Development',
      description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  }
]


function Service() {
  const [serviceList, setServiceList] = useState(ServiceList);
   
  return (
    <div id="service">
      <div className={cn("section-wrapper")}>
        <div className={cn("container",styles.wrapper)}>
          <div className={styles.content_title_area}>
            <h2 className={styles.title}>My Awesome Service</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
          <div className={styles.service_grid_area}>
            {ServiceList?.map((item)=>(
              <div className={styles.service_item} key={item.id}>
              <div className={styles.service_inner}>
                <span className={styles.icon}>{item.icon}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
            )

            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service