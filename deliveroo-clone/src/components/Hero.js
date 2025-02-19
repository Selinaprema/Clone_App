import React from "react";
import "./Hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h1>Restaurants, takeaways, supermarkets and shops. Delivered.</h1>
      </div>
      <div className="hero-input-container">
        <div className="top-row">
          <p>Enter a postcode to see what we deliver:</p>
        </div>
        <div className="middle-row">
          <div className="left-column">
            <input
              type="text"
              placeholder="e.g. EC4R 3TE"
              className="address-input"
            />
          </div>
          <div className="right-column">
            <button className="order-button">Find Food</button>
          </div>
        </div>
        <div className="bottom-row">
          <p>Log in for your recent addresses.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
