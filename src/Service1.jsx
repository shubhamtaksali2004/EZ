import React from "react";
import { Link } from "react-router-dom";
import "./Service1.css";

export default function Service1() {
  return (
    <section className="services-section">
      <h2 className="section-heading">
        The storyboard reveals the breadth of our craft.
      </h2>

      <div className="brush-stroke-container">
        <img src="/Vector 5.svg" alt="decorative brush stroke" className="brush-stroke-img" />
      </div>

      <div className="cards-container">
        <Link to="/film-production" className="service-card card-1">
          <img src="/img.png" alt="decorative tape" className="card-tape card-tape-1" />
          <img src="/Frame 30.png" alt="Film Production" className="card-image" />
        </Link>

        <Link to="/branding" className="service-card card-2">
          <img src="/image 7.png" alt="decorative tape" className="card-tape card-tape-2" />
          <img src="/Frame 30 (1).png" alt="Branding" className="card-image" />
        </Link>

        <Link to="/art-curation" className="service-card card-3">
          <img src="/image 8.png" alt="decorative tape" className="card-tape card-tape-3" />
          <img src="/Frame 30 (2).png" alt="Art Curation" className="card-image" />
        </Link>
      </div>

      <div className="bottom-border-container">
        <img src="/Frame 33.svg" alt="border" className="bottom-border-img" />
      </div>
    </section>
  );
}
