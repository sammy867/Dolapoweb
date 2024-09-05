import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import Dolapo from "../../assets/dp.jpeg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";

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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Portfolio</li>
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
