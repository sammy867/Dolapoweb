import React, { useContext } from "react";
import "./Toggle.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className={`toggle ${darkMode ? "dark" : ""}`} onClick={handleClick}>
      <FaSun />
      <FaMoon />
      <div className="t-button"></div>
    </div>
  );
};

export default Toggle;
