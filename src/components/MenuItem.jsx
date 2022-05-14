import React from "react";
import "../styles/MenuItem.css";

const MenuItem = ({ name, image, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
