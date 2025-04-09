
import React, { useState, useEffect } from 'react';
import './Loader.css';
import Home from '../Home';
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate a 1-second loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <div id="preloader">
          <div className="bar-container">
            <div className="barb"></div>
            <div className="barb"></div>
            <div className="barb"></div>
            <div className="barb"></div>
            <div className="barb"></div>
          </div>
          <h1 style={{ color: "white" }}>Coming soon...</h1>
        </div>
      ) : (
        <div id="content">
          <Home/>
        </div>
      )}
    </>
  );
};

export default Loader;
