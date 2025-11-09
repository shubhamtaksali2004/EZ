import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service4.css";

const Service4 = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    <section className="film-production-section">
      <button onClick={() => navigate(-1)} className="back-button">
        <img src="/Frame 2.png" alt="Back" className="back-icon" />
      </button>

      <div className="quote-section">
        <h2 className="quote-text">
          “Filmmaking is a chance to live many lifetimes.” –{" "}
          <span className="quote-author">Robert Altman</span>
        </h2>
        <div className="underline-container">
          <img src="/Vector 5.svg" alt="underline" className="underline-img" />
        </div>
      </div>

      <div className="main-content">
        <div className="image-box">
          <img src="/Frame 31.png" alt="Film Production" className="film-image" />
        </div>

        <div className="text-box">
          <p>Who says films are just an escape?</p>
          <p>
            We see them as a way to live many lives – to feel, to explore, and
            to tell stories that stay.
          </p>
          <p>
            And with each film, we carry new memories and new reasons to keep
            creating.
          </p>

          <p className="list-title">V crafts:</p>
          <ul className="craft-list">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>
        </div>
      </div>

      <div className="explore-section">
        <p className="explore-text">Explore Now</p>
        <img src="/Vector.png" alt="Arrow" className="explore-arrow" />
      </div>

      <img src="/Camera 02.svg" alt="Tripod" className="decor-icon icon-tripod" />
      <img src="/Camera 01.svg" alt="Camera" className="decor-icon icon-camera1" />
      <img src="/Camera 03.svg" alt="Camera" className="decor-icon icon-camera2" />
    </section>
  );
};

export default Service4;
