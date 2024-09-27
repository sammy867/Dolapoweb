import React from "react";
import "./Card.css";

const Card = ({ pictures, heading, details }) => {
  return (
    <div className="card">
      <img src={pictures} alt=" " />
      <span>{heading}</span>
      <span>{details}</span>
      <a href="https://www.linkedin.com/in/dolapo-o-b56909263/">
        <button className="btn3">
          <span className="txt">Reach out🙏</span>
          <span>Thanks!❤</span>
        </button>
      </a>
    </div>
  );
};

export default Card;
