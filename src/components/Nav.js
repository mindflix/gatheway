import React, { useState } from "react";
import {
  IoMenuOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoPricetagsOutline,
} from "react-icons/io5";

function Nav() {
  const [isActive, setActive] = useState(false);
  const [isTop, setTop] = useState(false);

  const handleMenu = () => {
    setActive(!isActive);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav>
      <div className="nav">
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
        <div className={isTop ? "nav--links disable" : "nav--links"}>
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
      <div className={isActive ? "menu active" : "menu"}>
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
    </nav>
  );
}

export default Nav;
