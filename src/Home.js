import React, { useEffect } from "react";
import "./Home.css";
import Nav from "./components/Nav";
import Event from "./components/Events";
import Footer from "./components/Footer";
import WavecrazeSponser from "./components/WavecrazeSponser";
import Timer from "./components/Timer";
import About from "./components/About";
import Team from "./components/Team";
import EventGallery from "./components/EventGallery";
const Home = () => {
  useEffect(() => {
    console.log("✅ Home.js component loaded");
  }, []);

  return (
    <div>
      <div className="home">
        <Nav />
        <div className="head">
          
          {/* Animated Heading */}
          <p>
            RADIONITroz presents
            <span>WAVECRAZE 2.0</span>
          </p>
        </div>
      </div>
    
      <div>
  <Timer date="2025-04-10T15:00:00" />
</div>

     <div>
      <About/>
     </div>
     <Event/>
     <EventGallery/>
      <div>
        <WavecrazeSponser />
        <Team/>
 
        <Footer />
      </div>
    </div>
  );
};

export default Home;
