import styles from "./Contact.module.css";
import cn from "classnames";
import Button from "components/ui/Button/Button";
import { contactImg } from "./../../assets/Index";
function Contact() {
  return (
    <div id="contact">
      <div className={cn("section-wrapper", styles.contact_wrapper)}>
        <div className={cn("container", styles.wrapper)}>
          <div className={styles.section}>
            <div className={styles.content_title_area}>
              <h2 className={styles.title}>Hire Me.</h2>
              <p>
                I am available for freelance work. Connect with me via phone:
                <span> 01923 088574 </span> or email:{" "}
                <span> admin@example.com</span>
              </p>
            </div>
            <form>
              <div className={styles.f_group}>
                <input
                  className={styles.f_input}
                  type="text"
                  name="fullname"
                  placeholder="Your name"
                  required
                ></input>
              </div>
              <div className={styles.f_group}>
                <input
                  className={styles.f_input}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                ></input>
              </div>
              <div className={styles.f_group}>
                <input
                  className={styles.f_input}
                  type="text"
                  name="number"
                  placeholder="Your number"
                  required
                ></input>
              </div>
              <div className={styles.f_group}>
                <textarea
                  className={styles.f_textarea}
                  type="text"
                  name="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className={styles.form_btn_area}>
                <Button preferences="submit_btn">submit</Button>
              </div>
            </form>
          </div>
          <div className={`${styles.section} ${styles.section_thumbnail}`}>
            <div className={styles.img_area}>
              <img alt="author" className={styles.img} src={contactImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
