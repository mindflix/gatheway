import React, { useState, useEffect } from "react";
import section1 from "../images/section1.jpg";
import section2 from "../images/section2.jpg";

function Home() {
  const [offsetY,setOffsetY] = useState(0)

  function handleScroll() {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="l-viewport">
      <div className="parallax">
        <img src={section1} style={{ transform: `translate3d(0,${-offsetY *0.01}vh,0)` }} alt="section1" />
        <img src={section2} style={{ transform: `translate3d(0,${-offsetY * 0.06 }vh,0)`, top: "-30px" }} alt="section1"/>
      </div>
    </div>
  );
}

export default Home;
