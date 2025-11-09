import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img
        src="/VFilms.png"
        alt="Varun Tyagi Logo"
        className="logo"
      />

      {/* Desktop Menu */}
      <ul className="menu">
        <li className="menu-item">Services</li>
        <li className="menu-item">Their Stories</li>
        <li className="menu-item">Our Story</li>
        <li className="menu-item">Varnan</li>

        <button className="talk-button">
          Let’s Talk
          <img src="/Hero/mail.svg" alt="mail icon" className="mail-icon" />
        </button>

        <button className="arrow-button">
          <img src="/Hero/Open.svg" alt="arrow icon" className="arrow-icon" />
        </button>
      </ul>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <img
          src={open ? "/Hero/Close.svg" : "/Hero/Open.svg"}
          alt="menu toggle"
          className="icon"
        />
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="mobile-menu">
          <p>Services</p>
          <p>Their Stories</p>
          <p>Our Story</p>
          <p>Varnan</p>
          <button className="mobile-talk-button">Let’s Talk 😊</button>
        </div>
      )}
    </nav>
  );
}
