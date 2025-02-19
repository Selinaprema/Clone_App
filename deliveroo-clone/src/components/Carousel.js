/* I wanted to make this a carousel like the website, but It was taking too long for me to find out */

import React from "react";
import "./Carousel.css";

const images = [
  "/Images/burger.jpg",
  "/Images/curry.jpg",
  "/Images/fries.jpg",
  "/Images/salad.jpg",
  "/Images/nachos.jpg",
  "/Images/ramen.jpg",
  "/Images/wings.jpg",
];

function ImageCarousel() {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div className="grid-item" key={index}>
          <img src={src} alt={`Image ${index + 1}`} className="grid-image" />
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;
