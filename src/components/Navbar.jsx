import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav--container">
      <nav className="nav">
        <ul className="nav--items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
