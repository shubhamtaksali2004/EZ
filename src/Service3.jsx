import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import hook
import "./Service3.css";

const Service3 = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <section className="art-curation-section">
      {/* 🔙 Back Button */}
      <button onClick={() => navigate(-1)} className="back-btn">
        <img src="/Frame 2.png" alt="Back" className="back-img" />
      </button>

      {/* 📝 Quote Section */}
      <div className="quote-section">
        <h2 className="quote-text">
          “V take art where it belongs, to the people.” –{" "}
          <span className="highlight">Vernita Verma</span>
        </h2>
        <div className="underline">
          <img src="/Vector 5.svg" alt="underline" className="underline-img" />
        </div>
      </div>

      {/* 🖼️ Main Content */}
      <div className="content-section">
        <div className="left-card">
          <img src="/service.png" alt="Art Curation" className="art-img" />
        </div>

        <div className="right-content">
          <p>
            Art isn’t meant to sit on distant walls – it’s meant to breathe, to
            travel, to belong.
          </p>
          <p>
            Through every festival, every performance, and every gathering, we
            help stories find their stage and their people.
          </p>
          <br />
          <p className="curates-title">V curates:</p>
          <ul className="curates-list">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>
        </div>
      </div>

      {/* Explore Now Section */}
      <div className="explore-section">
        <p className="explore-text">Explore Now</p>
        <img src="/Vector.png" alt="Arrow" className="explore-arrow" />
      </div>

      {/* Decorative Icons */}
      <img
        src="/Art Curation Icons 02.svg"
        alt="Decorative"
        className="icon icon1"
      />
      <img
        src="/Art Curation icons 03.svg"
        alt="Decorative"
        className="icon icon2"
      />
      <img
        src="/Art Curation icons 01.svg"
        alt="Decorative"
        className="icon icon3"
      />
    </section>
  );
};

export default Service3;
