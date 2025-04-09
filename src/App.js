import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} /> {/* Matches the navbar link */}
            <Route path="/team" element={<h1>Team Page</h1>} />
            <Route path="/sponsors" element={<h1>Sponsors Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
          </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
