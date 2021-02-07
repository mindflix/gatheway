import React, { useState, useEffect } from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
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
      body.style.overflow = "";
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
          <Link className="nav--logo link" to={ROUTES.LANDING}>
            <h1>Gatheway</h1>
          </Link>
          <ul className="nav--right">
            <li>
              <IoSearchOutline size={24} />
            </li>
            <li>
              <Link className="link" to={ROUTES.LOGIN}>
                <IoPersonOutline size={24} />
              </Link>
            </li>
            <li>
              <IoPricetagsOutline size={24} />
            </li>
          </ul>
        </div>
        <NavLinks />
      </nav>
      <Menu isActive={isActive} handleMenu={handleMenu} />
    </React.Fragment>
  );
}

function NavLinks() {
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
          <Link to={ROUTES.LOGIN}>
            <button className="btn" onClick={props.handleMenu}>
              Se connecter
            </button>
          </Link>
        </li>
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
