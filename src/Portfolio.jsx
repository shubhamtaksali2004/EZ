import React from "react";
import "./Portfolio.css"; // import normal CSS file

const Portfolio = () => {
  return (
    <section className="portfolio-section">

      <img
        src="/Cam Group.svg"
        alt="Decorative Camera"
        className="camera-decor"
      />

      <img
        src="/cv.png"
        alt="Mandala"
        className="mandala-decor"
      />

      <div className="portfolio-title">
        <h2>The Highlight Reel</h2>
        <p>Watch the magic we’ve captured.</p>
      </div>

      <div className="film-frame">

        <a href="#" className="arrow left-arrow">
          <img src="/Vector 10.png" alt="Previous" />
        </a>

        <img
          src="/Group 11.png"
          alt="Film Frame"
          className="frame-img"
        />

        {/* Embedded Video (optional uncomment if needed) */}
        {/* 
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Highlight Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        */}

        <a href="#" className="arrow right-arrow">
          <img src="/Vector 9.png" alt="Next" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
