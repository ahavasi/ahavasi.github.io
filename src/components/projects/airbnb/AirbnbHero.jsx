import React from "react";
import grid from "./airbnb-assets/photo-grid.png";

export default function AirbnbHero() {
  return (
    <section className="airbnb-hero">
      <img className="airbnb-hero--photo" src={grid} alt="photo grid" />
      <h1 className="airbnb-hero--header">Online Experiences</h1>
      <p className="airbnb-hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
