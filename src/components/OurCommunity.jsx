import React from "react";
import "./ourCommunity.css";
import {
  FaUsers,
  FaGlobeAmericas,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

// Sample data for testimonials - easily replaceable with real data
const testimonials = [
  {
    name: "Divya Sharma",
    role: "Full Stack Developer",
    quote:
      "The community here is incredible. Whenever I was stuck, someone was always there to help. It felt like learning with a team.",
    image: "/students/4.jpg", // Replace with actual image paths
  },
  {
    name: "Rohan Kumar",
    role: "Data Science Student",
    quote:
      "Being able to connect with learners from all over the world gave me new perspectives and kept me motivated.",
    image: "/students/3.jpg",
  },
  {
    name: "Anjali Mehta",
    role: "Cybersecurity Analyst",
    quote:
      "The weekly challenges and group projects were the best part. It’s more than just a course; it’s a real community.",
    image: "/students/5.jpg",
  },
];

const OurCommunity = () => {
  return (
    <div className="community-container">
      <div className="community-content">
        {/* === Top Section: Title and Stats === */}
        <div className="community-header">
          <h1 className="community-title">
            Join a Global Community of Learners
          </h1>
          <p className="community-subtitle">
            You're not just enrolling in a course; you're joining a vibrant
            network of peers, mentors, and experts dedicated to helping you
            succeed.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <span className="stat-number">1000+</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-card">
            <FaGlobeAmericas className="stat-icon" />
            <span className="stat-number">15+</span>
            <span className="stat-label">Countries Represented</span>
          </div>
          <div className="stat-card">
            <FaAward className="stat-icon" />
            <span className="stat-number">96%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>

        {/* === Middle Section: Testimonials === */}
        <div className="testimonials-section">
          <h2 className="section-heading">From Our Community</h2>
          <div className="testimonials-grid">
            {/* We map the array twice to create a seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div className="testimonial-card" key={`testimonial-${index}`}>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Bottom Section: Call to Action === */}
        <div className="community-cta">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-text">
            Connect, collaborate, and grow with thousands of learners worldwide.
          </p>
          <a href="#" className="cta-button">
            Join the Conversation <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
