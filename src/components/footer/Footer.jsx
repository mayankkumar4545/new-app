import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

// A simple, clean SVG logo component
const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0L32 9.2376L24 13.8564V23.094L16 27.7128L0 18.4752V9.2376L16 0Z"
      fill="#007BFF"
    />
    <path
      d="M16 14.8205L32 24.0581L24 28.6769L8 19.4393L16 14.8205Z"
      fill="#0056b3"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand and Contact Info */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img
              src="/icon/edutech-logo.png"
              alt="EduTech Hub Logo"
              className="navbar-logo"
            />
            <span className="logo-text">EduTech Hub</span>
          </div>
          <p className="footer-description">
            Empowering students with personalized, interactive learning designed
            to build essential skills for future success.
          </p>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="contact-icon" /> Jop Plaza, Sector 18,
              Noida, UP 201301
            </p>
            <p>
              <FaEnvelope className="contact-icon" />{" "}
              <a href="mailto:info@educationhub.com">info@educationhub.com</a>
            </p>
            <p>
              <FaPhoneAlt className="contact-icon" />{" "}
              <a href="tel:+917973253337">+91 79-73253337</a>
            </p>
          </div>
        </div>

        {/* Column 2: Link Groups */}
        <div className="footer-section footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <a href="#">Courses</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Help Center</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Educators</a>
            <a href="#">Blog</a>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <a href="#">Solving Equations</a>
            <a href="#">Thinking in Code</a>
            <a href="#">Community</a>
          </div>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        {/*  <div className="footer-section footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons-group">
            <a href="#" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>*/}
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2023 Education Hub. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
