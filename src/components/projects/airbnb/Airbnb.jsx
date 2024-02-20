import React from "react";
import cardData from "./airbnbData.js";
import AirbnbHero from "./AirbnbHero.jsx";
import AirbnbCard from "./AirbnbCard.jsx";
import AirbnbNavbar from "./AirbnbNavbar.jsx";
import "./Airbnb.css";

export default function Airbnb() {
  const cardElements = cardData.map((item) => {
    return <AirbnbCard key={item.id} {...item} />;
  });
  return (
    <div className="airbnb-body" style={{ height: "100%" }}>
      <AirbnbNavbar />
      <AirbnbHero />
      <section className="airbnb-cards-list airbnb-section">
        {cardElements}
      </section>
    </div>
  );
}
