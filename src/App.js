import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import About1 from "./About1";
import AboutSection from "./AboutSection";
import Service1 from "./Service1";  // Film Production
import Service2 from "./Service2";  // Branding
import Service3 from "./Service3";  // Art Curation
import Service4 from "./Service4";  // Extra Service (if any)
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hero2 />
              <About1 />
              <AboutSection />
              <Service1 /> {/* 3 clickable cards */}
              <Portfolio />
              <Contact />
            </>
          }
        />

        {/* 🎬 Film Production Page */}
        <Route path="/film-production" element={<Service4 />} />

        {/* 🏷️ Branding Page */}
        <Route path="/branding" element={<Service2 />} />

        {/* 🎨 Art Curation Page */}
        <Route path="/art-curation" element={<Service3 />} />

        {/* 🎥 Extra Service (if needed) */}
        <Route path="/service4" element={<Service4 />} />
      </Routes>
    </Router>
  );
}

export default App;
