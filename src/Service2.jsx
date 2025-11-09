import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import hook
import "./Service2.css";

const Service2 = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <section className="branding-section">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)} // ✅ Go back to previous page
        className="back-button"
      >
        <img src="/Vector.png" alt="Back" className="back-icon" />
      </button>

      {/* 📝 Quote Section */}
      <div className="quote-section">
        <h2 className="quote-heading">
          “A brand is a voice, and a product is a souvenir.” –{" "}
          <span className="quote-author">Lisa Gansky</span>
        </h2>

        {/* Decorative underline image */}
        <div className="underline-container">
          <img src="/Vector 5.svg" alt="underline" className="underline-img" />
        </div>
      </div>

      {/* 🖼️ Main Content */}
      <div className="main-content-wrapper">
        {/* Left Image Card */}
        <div className="image-card">
          <img src="/Frame 32.png" alt="Branding" className="branding-image" />
        </div>

        {/* Right Text Content */}
        <div className="text-content-box">
          <p className="text-paragraph">
            A brand isn’t just what you see – it’s what you remember, what you
            carry home, and what you trust.
          </p>
          <p className="text-paragraph">
            We shape brands that people remember, return to, and fall in love
            with.
          </p>

          <p className="list-heading">V creates:</p>
          <ul className="service-list">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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
        src="/Branding Vector 01.svg"
        alt="Decorative"
        className="decorative-icon icon-bottom-left"
      />
      <img
        src="/Branding Vector 02.svg"
        alt="Decorative"
        className="decorative-icon icon-center-right"
      />
      <img
        src="/Branding Vector 03.svg"
        alt="Decorative"
        className="decorative-icon icon-bottom-right"
      />
    </section>
  );
};

export default Service2;
