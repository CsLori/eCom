import React from "react";
import "./menu.scss";

const Menu = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Menu;
