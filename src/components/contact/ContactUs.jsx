import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <div className="contact-section">
      {/* Top background section */}
      <div className="contact-header">
        <div className="overlay-text">
          <h2>Contact Us</h2>
          <p className="text-white fw-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet{" "}
            <br />
            provident optio, animi consectetur eaque omnis? Vel omnis soluta
            ducimus iste.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="contact-content">
        <div className="contact-left">
          <h3>Get Your Instant Free Quote Now</h3>
          <p className="sub-heading">
            Qadipiscing elit, sed do eiusmod tempor.
          </p>
          <p className="details">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div className="contact-phone">
            <span className="phone-icon">📞</span>
            <span className="phone-number">0 800 555 44 33</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
