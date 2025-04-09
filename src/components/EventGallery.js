import React from "react";
import "./EventGallery.css";

const images = [
  "./image1.jpg",
  "./IMG_4237.JPG",
   "./IMG_4272.JPG",
  "./IMG_8514.jpg",
  "./DSC_0883[1].jpg",
  "./IMG_4271 (1).jpg",
  "./eventg.jpg",
  "./DSC_0847[1].jpg",
];

const EventGallery = () => {
  return (
    <div className="gallery-container">
      <h2>EVENT GALLERY</h2>
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