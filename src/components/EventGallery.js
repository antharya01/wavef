import React from "react";
import "./EventGallery.css";

const images = [
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
  "./image1.jpg",
];

const EventGallery = () => {
  return (
    <div className="gallery-container">
      <h2>Event Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;