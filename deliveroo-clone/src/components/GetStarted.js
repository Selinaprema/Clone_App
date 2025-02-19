import React from "react";
import "./GetStarted.css";

function FlexContainer() {
  const items = [
    {
      image: "/Images/card1.jpg",
      header: "Partner With Us",
      text: "Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.",
    },
    {
      image: "/Images/card2.jpg",
      header: "Ride With Us",
      text: "The freedom to fit work around your life. Plus great fees, perks and discounts.",
    },
    {
      image: "/Images/card3.jpg",
      header: "Deliveroo For Work",
      text: "From team lunches to meal allowances for your late-night workers, we've got your workplace meals covered.",
    },
    {
      image: "/Images/card4.jpg",
      header: "Gift Cards",
      text: "Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card.",
    },
  ];

  return (
    <div className="flex-container">
      {items.map((item, index) => (
        <div className="flex-item" key={index}>
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className="flex-image"
          />
          <h2 className="flex-heading">{item.heading}</h2>
          <p className="flex-text">{item.text}</p>
          <div />
          <div>
            <button className="flex-button">Get Started</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlexContainer;
