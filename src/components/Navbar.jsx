import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav--container">
      <nav className="nav">
        <ul className="nav--items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
