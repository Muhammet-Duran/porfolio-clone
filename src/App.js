import styles from "./App.module.css";
import Home from "pages/Home";
import Project from "pages/Project";
import ProjectDetail from "pages/ProjectDetail";
import News from "pages/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Icon } from "Icons";
import ScrollToTop from "react-scroll-up";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* <Route exact path="/blog" element={<h1>Blog</h1>} /> */}
          <Route path="/blog/:id" element={<News />} />
        </Routes>
      </Router>

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
