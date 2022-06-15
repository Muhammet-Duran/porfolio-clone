import styles from "./App.module.css";
import {
  Header,
  Home,
  About,
  Service,
  Portfolio,
  Blog,
  Contact,
  Footer,
} from "./components/Index";
import { Icon } from "Icons";
import ScrollToTop from "react-scroll-up";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.sections}>
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <div className={styles.backto_top}>
        <ScrollToTop showUnder={160}>
          <span className={styles.up_arrow}>
            <Icon name="arrow" size={24} />
          </span>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
