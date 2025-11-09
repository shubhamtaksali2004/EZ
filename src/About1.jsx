import React from 'react';
import './About.css'; // Import the CSS file

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* The background image style is now in the CSS file */}

      {/* ===== PAPER NOTE ===== */}
      <div className="paper-note-container">
        <img
          src="/Group 9.png"
          alt="Paper Note"
          className="paper-note-img"
        />
      </div>

      {/* ===== INDIA GATE ===== */}
      <img
        src="/india.svg"
        alt="India Gate"
        className="india-gate-img"
      />

      {/* ===== SILHOUETTES GROUP (Corrected Size and Position) ===== */}
      <div className="silhouettes-group-container">
        <img
          src="/Group 2.svg" 
          alt="Team Silhouettes"
          className="silhouettes-group-img"
        />
      </div>

      {/* ===== ARROWS & LABELS (Final Positioned) ===== */}
      <div className="arrows-labels-container">
        {/* Film Makers */}
        <p className="label film-makers-label">Film Makers</p>
        <img src="/Vector-1.svg" alt="Arrow" className="arrow film-makers-arrow" />

        {/* Branding experts */}
        <p className="label branding-experts-label">Branding experts</p>
        <img src="/Vector.svg" alt="Arrow" className="arrow branding-experts-arrow" />

        {/* Art Creators */}
        <p className="label art-creators-label">Art Creators</p>
        <img src="/Vector-2.svg" alt="Arrow" className="arrow art-creators-arrow" />
      </div>

      {/* ===== BOTTOM TEXT & BUTTON (High Z-Index) ===== */}
      <div className="bottom-content-container">
        <h2 className="bottom-text">
          Take a closer look at the stories V bring to life.
        </h2>
        <button className="portfolio-button">
          View Portfolio
        </button>
      </div>
    </section>
  );
}