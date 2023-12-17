import React from "react";
import icon from "./airbnb-assets/airbnb_icon.png";

export default function AirbnbNavbar() {
  return (
    <nav className="airbnb-nav">
      <img className="airbnb-nav--logo" src={icon} alt="airbnb icon" />
    </nav>
  );
}
