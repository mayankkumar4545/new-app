import React, { useState } from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
  };

  return (
    <div className="contact-page">
      {/* === Hero Section === */}
      <div className="contact-header">
        <div className="header-overlay">
          <h1 className="header-title">Get in Touch</h1>
          <p className="header-subtitle">
            Have a question or want to learn more? We're here to help.
          </p>
        </div>
      </div>

      {/* === Main Content Section === */}
      <div className="contact-main-content">
        <div className="contact-container">
          {/* Left Column: Info & Map */}
          <div className="contact-info-panel">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Reach out to us via phone, email, or visit our office. We look
              forward to hearing from you!
            </p>
            <div className="info-list">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Jop Plaza, Sector 18, Noida, UP 201301</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <a href="mailto:info@educationhub.com">info@educationhub.com</a>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <a href="tel:+917973253337">+91 79-73253337</a>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.626875887624!2d77.32398387526783!3d28.58097097569305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d3b76223%3A0x24379a25f38d3e95!2sJOP%20Plaza!5e0!3m2!1sen!2sin!4v1722338045391!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EduTech Hub Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Send Us a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g., Course Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us more..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
