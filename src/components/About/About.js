import TitleArea from "components/ui/TitleArea/TitleArea";
import styles from "./About.module.css";
import AboutImg from "assets/aboutImg.jpeg";
import cn from "classnames";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const tabArr = [
  "Main skills",
  "Awards",
  "Experience",
  "Education & Certification",
];
const sectionTitle = "About Me";
const sectionDescription =
  " There are many variations of passages of Lorem Ipsum available, but the majority have suffered going to use a passage of in some form, by injected humour,or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,";
function About() {
  return (
    <div id="about">
      <div className={cn("section-wrapper", styles.about_wrapper)}>
        <div className={cn("container", styles.wrapper)}>
          <div className={styles.thumbnail}>
            <img className={styles.img} alt="img" src={AboutImg} />
          </div>
          <div className={styles.right_area}>
            <TitleArea
              preferences="title_about"
              title={sectionTitle}
              description={sectionDescription}
            />
            <div className={styles.tabs_area}>
              <div className={styles.tab_container}>
                <Tabs>
                  <TabList className={styles.tab_list}>
                    {tabArr.map((tabItem, index) => (
                      <Tab key={index} className={styles.tab_item}>
                        {tabItem}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanel>
                    <div className={styles.tab_content}>
                      <ul className={styles.content_list}>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            User experience design <span> - UI/UX</span>
                          </a>
                          Delight the user and make it work.
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Web and user interface design
                            <span> - Development</span>
                          </a>
                          Websites, web experiences, ...
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Interaction design <span> - Animation</span>
                          </a>
                          I like to move it move it.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className={styles.tab_content}>
                      <ul className={styles.content_list}>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className={styles.tab_content}>
                      <ul className={styles.content_list}>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className={styles.tab_content}>
                      <ul className={styles.content_list}>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            BSc In CSE
                            <span> - ABC University, Los Angeles, CA</span>
                          </a>{" "}
                          2010
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Diploma in Computer Science
                            <span> - Gamma Technical Institute</span>
                          </a>{" "}
                          2009
                        </li>
                        <li className={styles.content_item}>
                          <a href="!#" className={styles.content_link}>
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
