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
        <img src={section1} className="parallax" style={{ transform: `translate3d(0,${-offsetY*0.01}vh,0)` }} />
        <img src={section2} className="parallax" style={{ transform: `translate3d(0,${-offsetY*0.06 - 30}vh,0)` }}/>
    </div>
  );
}

export default Home;
