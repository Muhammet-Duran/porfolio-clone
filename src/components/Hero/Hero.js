import { useTypewriter, Cursor } from "react-simple-typewriter";

import styles from "./Hero.module.css";
function Hero() {
  const words = ["UX Designer", "UI Designer", "Content Writter"];
  const { text } = useTypewriter({
    words,
    loop: 0, // Infinit
    typeSpeed: 200,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div id="home">
      <div className={styles.home}>
        <div className={styles.person_image}>
          <div className="container">
            <div className={styles.person_area}>
              <div className={styles.person_info}>
                <span>welcome to my world</span>
                <div className={styles.act_area}>
                  <h1>
                    Hi, I'm Joe Doe
                    <br />
                    <span className={styles.textAnimate}>{text}</span>
                    <Cursor style={{ color: "inherit" }} />
                  </h1>
                </div>
                <h2>based in USA.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
