import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./Home";
import Events from "./components/Events";
import Nav from "./components/Nav";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onLoaded={handleLoaded} />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Event" element={<Events />} /> {/* Matches the navbar link */}
            <Route path="/team" element={<h1>Team Page</h1>} />
            <Route path="/sponsors" element={<h1>Sponsors Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
