import React from "react";
import star from "./airbnb-assets/star.png";

export default function AirbnbCard(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="airbnb-card">
      {badgeText && <div className="airbnb-card--badge">{badgeText}</div>}
      <img
        src={`../../../../airbnb/${props.coverImg}`}
        className="airbnb-card--image"
      />
      <div className="airbnb-card--stats">
        <img src={star} className="airbnb-card--star" />
        <span>{props.stats.rating}</span>
        <span className="airbnb-gray">({props.stats.reviewCount}) • </span>
        <span className="airbnb-gray">{props.location}</span>
      </div>
      <p className="airbnb-card--title">{props.title}</p>
      <p className="airbnb-card--price">
        <span className="airbnb-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
