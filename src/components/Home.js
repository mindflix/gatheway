import React, { useState, useEffect } from "react";

import section2 from "../images/section4.jpg";
import section1 from "../images/section3mobile.jpg";
import section3 from "../images/section3.jpg";
import article from "../images/article.jpg";

function Home() {
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
      <div
        className="parallax"
        style={{ top: `${offsetY * 0.02}vh`, zIndex: 1 }}
      >
        <div className="parallax--bg">
          <img src={isMobile ? section1 : section3} alt="section1" />
        </div>
        <div
          className="parallax--content"
          style={{ transform: `translate3d(0,${-offsetY * 0.02}vh,0)` }}
        >
          <div className="section"></div>
          <div className="viewport">
            <div className="container">
              <div className="text--banner">
                <h1>#nouvelle collection</h1>
              </div>
              <div className="wrapper">
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
      </div>
      <div
        className="parallax"
        style={{ top: `${-offsetY * 0.005}vh`, zIndex: 0 }}
      >
        <div className="parallax--bg">
          <img src={section2} alt="section1" />
        </div>
        <div
          className="parallax--content"
          style={{ transform: `translate3d(0,${10 - offsetY * 0.02}vh,0)` }}
        >
          <div className="section"></div>
          <div className="viewport">
            <div className="container">
              <div className="text--banner">
                <h1>La Sélection Printemps</h1>
              </div>
              <div className="wrapper">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </div>
            </div>
            <div className="text--banner">
              <h1>Notre favori</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Article() {
  return (
    <div className="wrapper--article">
      <img src={article} alt="article" />
      <h3>Balenciaga</h3>
    </div>
  );
}

export default Home;
