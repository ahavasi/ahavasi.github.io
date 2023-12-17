import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <div className="projects-list">
        <Link to="airbnb">Airbnb Clone</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
