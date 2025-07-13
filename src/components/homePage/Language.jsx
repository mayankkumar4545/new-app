import React from "react";
import "./language.css";

const subjects = [
  { label: "All Subject", icon: "📚", color: "#ffe6e1" },
  { label: "English", icon: "🅰️", color: "#f4e1ff" },
  { label: "Business", icon: "💼", color: "#e5f6d9" },
  { label: "History", icon: "🏛️", color: "#e1f2ff" },
  { label: "Geography", icon: "🧭", color: "#ffeccd" },
  { label: "Chemistry", icon: "🧪", color: "#d4f8f3" },
  { label: "Physics", icon: "⚛️", color: "#dbf3d8" },
  { label: "Engineering", icon: "🔧", color: "#e5f2ff" },
  { label: "Medicine", icon: "🩺", color: "#f2e7ff" },
  { label: "Computers", icon: "💻", color: "#e5e6ff" },
  { label: "Mathematics", icon: "📐", color: "#dfe2ff" },
  { label: "Arts", icon: "🎨", color: "#ecf7dd" },
];

const Language = () => {
  return (
    <section className="language-wrapper">
      <div className="language-header">
        <img src="/icon/cloud-icon.png" alt="cloud" className="language-icon" />
        <h2 className="language-title">
          Where Questions
          <br />
          <span>Meet Answers</span>
        </h2>
      </div>

      <div className="language-grid">
        {subjects.map((item, index) => (
          <div
            className="language-card"
            key={index}
            style={{ backgroundColor: item.color }}
          >
            <div className="language-icon-box">{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Language;
