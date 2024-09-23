import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import Dolapo from "../../assets/dp.jpeg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dolapo Oyegunle</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list" style={{ color: darkMode ? "white" : "" }}>
          <ul style={{ listStyleType: "disc", color: darkMode ? "white" : "" }}>
            <Link className="name" to="/">
              <li>Home</li>
            </Link>
            <Link className="name" to="/about">
              <li>About</li>
            </Link>
            <Link className="name" to="/services">
              <li>Services</li>
            </Link>
            <Link className="name" to="/skills">
              <li>Skills</li>
            </Link>
            <Link className="name" to="/portfolio">
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <a href="/" className="n-home">
          <img className="n-pic" src={Dolapo} alt="Profile" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
