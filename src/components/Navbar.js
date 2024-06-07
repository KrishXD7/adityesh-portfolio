import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from '../adityesh/adityeshlogo-removebg-preview.png';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > -100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo-link">
        <img src={logoImage} alt="Logo" className="logo-image" /> 
        <h1>Adityesh</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/Photos">Photos</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000 " }} />
        ) : (
          <FaBars size={20} style={{ color: "#000 " }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
