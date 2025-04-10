import React, { useEffect } from "react";
import "./Home.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import About from "./components/About";
import Events from "./components/Events";
import EventGallery from "./components/EventGallery";
import Team from "./components/Team";

const Home = () => {
  useEffect(() => {
    console.log("✅ Home.js component loaded");
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Home Section */}
      <div className="home" id="home-section">
        <div className="head">
          <p>
            RADIONITroz presents
            <span>WAVECRAZE 2.0</span>
          </p>
        </div>
      </div>

      {/* Timer Section */}
      <div id="timer-section">
        <Timer date="2025-04-10T15:00:00" />
      </div>

      {/* About Section */}
      <div id="about-section">
        <About />
      </div>

      <div id="events-section">
        <Events />
      </div>

      {/* Event Gallery Section */}
      <div id="event-gallery-section">
        <EventGallery />
      </div>

      {/* Team Section */}
      <div id="team-section">
        <Team />
      </div>

      {/* Footer Section */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
