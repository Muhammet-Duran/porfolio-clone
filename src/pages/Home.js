import React, { Fragment } from "react";
import {
  Header,
  Hero,
  About,
  Service,
  Portfolio,
  Blog,
  Contact,
  Footer,
} from "./../components/Index";
function Home({ PortfolioList }) {
  return (
    <Fragment>
      <Header />
      <div>
        <Hero />
        <About />
        <Service />
        <Portfolio PortfolioList={PortfolioList} />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Home;
