import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🍁</span>
            <span className="logo-text">My App</span>
          </div>
          <p>
            Empowering Students with Personalized,
            <br />
            Interactive Learning Designed to Build
            <br />
            Essential Skills for Future Success
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <a href="#">Courses</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Help</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Educators</a>
          </div>
          <div className="link-group">
            <h4>Behind the scenes</h4>
            <a href="#">Solving Equations</a>
            <a href="#">Thinking in Code</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
