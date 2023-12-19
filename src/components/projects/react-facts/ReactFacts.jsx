import React from "react";
import FactsNavbar from "./FactsNavbar";
import FactsMain from "./FactsMain";
import "./ReactFacts.css";

function ReactFacts() {
  return (
    <div className="fact-container">
      <FactsNavbar />
      <FactsMain />
    </div>
  );
}

export default ReactFacts;
