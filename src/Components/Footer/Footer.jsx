import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bomb">
      <p>© Copyright Dolapo Oyegunle {currentDate} All rights reserved</p>
    </footer>
  );
};

export default Footer;
