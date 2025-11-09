import React from "react";
import './AboutSection.css'; // Import the new CSS file

export default function AboutSection() {
    return (
<section
            className="about-section"
        >
            {/* ===== NEW: LOGO ELEMENT ===== */}
            <img
                src="/vfilms.png" // **Make sure this path is correct**
                alt="VFilms Logo"
                className="logo-corner"
            />
            <div className="content-left">
                {/* Heading */}
                <h2 className="heading-main">
                    A montage of familiar faces and names.
                </h2>

                {/* Paragraph */}
                <p className="paragraph-main">
                    Some stories come from the biggest names. Others begin with bold,
                    rising voices. We’ve been fortunate to walk alongside both – listening,
                    creating, and building stories that matter.
                </p>

                {/* Stats Cards */}
                <div className="stats-container">

                    {/* Card 1 */}
                    <div className="stat-card stat-card-1">
                        <p className="stat-number">85+</p>
                        <p className="stat-label">Projects</p>
                    </div>

                    {/* Card 2 */}
                    <div className="stat-card stat-card-2">
                        <p className="stat-number">50+</p>
                        <p className="stat-label">Happy Clients</p>
                    </div>

                    {/* Card 3 */}
                    <div className="stat-card stat-card-3">
                        <p className="stat-number">10+</p>
                        <p className="stat-label">Experts Team</p>
                    </div>

                </div>
            </div>

            {/* ===== RIGHT SIDE CONTENT ===== */}
            <div className="content-right">
                {/* Script Font Quote */}
                <p className="quote-text">
                    Every project is more than just a brief – <br />
                    it’s a new chapter waiting to be written. <br />
                    Together, we’ve crafted tales that inspire, <br />
                    connect, and endure.
                </p>

                {/* Curved Logos and Illustration - Now styled directly in content-right */}
                <img
                    src="/Group 10.png"
                    alt="Brand Curve"
                    className="brand-curve-img"
                />
                <img
                    src="/OBJECTS.png"
                    alt="Mountain Illustration"
                    className="mountain-img"
                />
            </div>
        </section>
    );
}