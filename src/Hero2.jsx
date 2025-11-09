import React from "react";
import "./Hero2.css";
// import Navbar2  from "./Navbar2";

const Hero2 = () => {
  return (
    <>
    <div>

    </div>

      <section className="hero-wrapper">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="mandala-wrap">
              <img
                src="/Hero/Hero Mandala.svg"
                alt="mandala"
                className="mandala"
              />

              <div className="logo-box">
                <img src="/vfilms.png" alt="V Films" className="logo-img" />
              </div>
            </div>
          </div>

          <div className="hero-right">
            <h1 className="hero-headline">
              Varnan is where stories find
              <br />
              their voice and form
            </h1>

            <div className="hero-subhead">Films · Brands · Art</div>

            <p className="hero-text">
              Since 2009, V has been telling stories — stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way — by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn’t just tell stories — V honors them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;