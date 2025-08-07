import React from "react";
import "./instructorBio.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// You can replace this with the actual instructor's data
const instructorData = {
  name: "Dr. Alex Chen",
  title: "Senior Software Engineer & Tech Educator",
  bio: "With over 15 years of experience in software development and a Ph.D. in Computer Science, Dr. Chen is passionate about making complex technical topics accessible to everyone. He has mentored hundreds of students who have gone on to successful careers at top tech companies.",
  image: "/instructors/alex-chen.jpg", // Replace with the actual image path
  linkedin: "https://linkedin.com/in/alexchen", // Replace with actual link
  github: "https://github.com/alexchen", // Replace with actual link
};

const InstructorBio = () => {
  return (
    <div className="instructor-bio-section">
      <h3>Meet Your Instructor</h3>
      <div className="instructor-card">
        <img
          src={instructorData.image}
          alt={instructorData.name}
          className="instructor-image"
        />
        <div className="instructor-info">
          <h4 className="instructor-name">{instructorData.name}</h4>
          <p className="instructor-title">{instructorData.title}</p>
          <p className="instructor-bio-text">{instructorData.bio}</p>
          <div className="instructor-socials">
            <a
              href={instructorData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={instructorData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBio;
