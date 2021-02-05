import React, { useState, useEffect } from "react";
import {
  IoMenuOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoPricetagsOutline,
} from "react-icons/io5";

function Nav() {
  const [isActive, setActive] = useState(false);

  function stopScroll() {
    const body = document.querySelector("body");
    if (isActive) {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  }

  function handleMenu() {
    setActive(!isActive);
    stopScroll();
  }

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav--container">
          <ul onClick={handleMenu} className="nav--left">
            <li>
              <IoMenuOutline size={32} />
              <p>MENU</p>
            </li>
          </ul>
          <div className="nav--logo">
            <h1>Gatheway</h1>
          </div>
          <ul className="nav--right">
            <li>
              <IoSearchOutline size={24} />
            </li>
            <li>
              <IoPersonOutline size={24} />
            </li>
            <li>
              <IoPricetagsOutline size={24} />
            </li>
          </ul>
        </div>
        <Links />
      </nav>
      <Menu isActive={isActive} />
    </React.Fragment>
  );
}

function Links() {
  const [isTop, setTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  function handleNav() {
    let diff = window.pageYOffset - scrollY;

    if (diff > 5 && diff >= 1) {
      setTop(false);
    }
    if ((diff < -5 && diff <= -1) || window.pageYOffset === 0) {
      setTop(true);
    }
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });
  return (
    <div className={isTop ? "nav--links" : "nav--links disable"}>
      <li>
        <span>Femme</span>
      </li>
      <li>
        <span>Homme</span>
      </li>
      <li>
        <span>Haute Couture</span>
      </li>
      <li>
        <span>Collections</span>
      </li>
      <li>
        <span>La Maison</span>
      </li>
      <li>
        <span>Contact</span>
      </li>
    </div>
  );
}

function Menu(props) {
  return (
    <div className={props.isActive ? "menu active" : "menu"}>
      <div className="menu--links">
        <li>
          <span>Femme</span>
        </li>
        <li>
          <span>Homme</span>
        </li>
        <li>
          <span>Haute Couture</span>
        </li>
        <li>
          <span>Collections</span>
        </li>
        <li>
          <span>La Maison</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </div>
    </div>
  );
}

export default Nav;
