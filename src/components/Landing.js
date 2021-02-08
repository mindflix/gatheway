import React, { useState, useEffect } from "react";

import section1 from "../images/section1m.jpg";
import section1m from "../images/section1.jpg";
import article from "../images/article.jpg";

function Landing() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setMobile] = useState(undefined);
  let screenSize = window.innerWidth;

  function handleScroll() {
    setOffsetY(window.pageYOffset);
  }

  function handleScreen(screenSize) {
    if (screenSize > 1180) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScreen(screenSize);
  }, [screenSize]);

  return (
    <React.Fragment>
      <section className="parallax">
        <div className="parallax--bg">
          <img src={isMobile ? section1 : section1m} alt="section1" />
        </div>
        <div
          className="parallax--content"
          style={{ transform: `translateY(${-offsetY * 0.02}vh)` }}
        >
          <div className="wrapper">
            <div className="container">
              <div className="text--banner">
                <h1>#nouvelle collection</h1>
              </div>
              <div className="grid">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Article() {
  return (
    <div className="grid--article">
      <img src={article} alt="article" />
      <h3>.Balenciaga</h3>
    </div>
  );
}

export default Landing;
