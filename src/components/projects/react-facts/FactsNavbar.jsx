import React from "react";
import logo from "./facts-assets/react.svg";

export default function FactsNavbar() {
  return (
    <nav className="facts-nav">
      <img src={logo} className="nav--icon"></img>
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
