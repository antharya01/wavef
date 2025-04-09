import React from "react";
import "./WavecrazeSponser.css";

const sponsors = [
  { name: "Sponsor 1", img: "/sponsor1.png" },
  { name: "Sponsor 2", img: "/sponsor2.png" },
  { name: "Sponsor 3", img: "/sponsor3.png" },
  { name: "Sponsor 4", img: "/sponsor4.png" },
  { name: "Sponsor 5", img: "/sponsor5.png" },
  { name: "Sponsor 6", img: "/sponsor6.png" },
];

const WavecrazeSponser = () => {
  return (
    <div className="sponsor-section">
      <h2 className="sponsor-title">Proudly Sponsored By</h2>
      <div className="sponsor-marquee-wrapper">
        <div className="sponsor-marquee">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div className="sponsor-logo" key={index}>
              <img src={sponsor.img} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WavecrazeSponser;
