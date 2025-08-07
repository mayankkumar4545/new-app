import React from "react";
import "./acfBuyPage.css";
import {
  FaHeart,
  FaArrowRight,
  FaHourglassHalf,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const AcfBuyPage = () => {
  // --- Link to your Google Form for Registration ---
  // Create a Google Form and replace the link below with your own.
  const registrationLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScouwsC18bsGiAVMY9OSKpUcoxwTVAXnQmEty_9i4mCVSl-rw/viewform?usp=sharing&ouid=116362153301398627615";

  return (
    <div className="acf-buy-page">
      <div className="page-background-glow"></div>
      <div className="product-card">
        {/* === Left Column: Course Information & CTA === */}
        <div className="product-info-panel">
          <h3 className="product-slogan">
            Build Your Tech Foundation. Unlock Your Future.
          </h3>
          <h1 className="product-main-title">
            Applied Computer Fundamentals with Carrier Perspective
          </h1>
          <p className="product-description">
            This is your first step into the world of technology. This course
            provides the essential knowledge of computer hardware, software, and
            networking needed to launch a successful career in IT—no prior
            experience required.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <FaHourglassHalf className="feature-icon" /> 15+ Hours Course
              Duration
            </div>
            <div className="feature-item">
              <FaCertificate className="feature-icon" />
              Online Proctored Exam
            </div>
            <div className="feature-item">
              <FaCode className="feature-icon" /> Expert-Led Modules
            </div>
          </div>

          <div className="price-tag">
            <span className="current-price">₹399</span>
            <span className="original-price">₹950</span>
          </div>

          <div className="call-to-action">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register Now <FaArrowRight />
            </a>
            <button className="wishlist-btn-new">
              <FaHeart />
            </button>
          </div>
        </div>

        {/* === Right Column: Visuals (Image & QR Code) === */}
        <div className="product-visual-panel">
          <img
            src="./qr/acf-qr.jpeg" // Use a relevant course image
            alt="Applied Computer Fundamentals Course"
            className="course-hero-image"
          />
          <div className="qr-code-card">
            <div className="qr-info">
              <h4>Scan & Pay</h4>
              <p>
                Scan the above QR code, pay the course fee and then fill the
                Registration form by clicking on "Register Now" button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcfBuyPage;
