import React, { useState } from "react";
import "./faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What is JavaScript?",
      answer:
        "JavaScript is a versatile programming language primarily used for enhancing web pages to provide a more user-friendly experience.",
    },
    {
      question: "How does JavaScript work?",
      answer:
        "JavaScript runs in the browser and interacts with HTML and CSS to create dynamic content.",
    },
    {
      question: "Is JavaScript right for my company’s web development?",
      answer:
        "JavaScript is essential for any modern web application and is supported by all major browsers.",
    },
    {
      question: "What are the costs and tools to use JavaScript?",
      answer:
        "JavaScript is free and can be used with various tools like VS Code, npm, and frameworks like React.",
    },
    {
      question: "How can I set up my environment for JavaScript?",
      answer:
        "Install Node.js and a code editor like VS Code to begin developing with JavaScript.",
    },
  ],
  Build: [
    {
      question: "How do I build my first JavaScript project?",
      answer:
        "Start by creating an HTML file and linking a JavaScript file using a <script> tag.",
    },
  ],
  Promote: [
    {
      question: "Can I use JavaScript for SEO?",
      answer:
        "JavaScript can be SEO-friendly with proper server-side rendering or static site generation.",
    },
  ],
  Manage: [
    {
      question: "How can I manage state in JavaScript apps?",
      answer:
        "You can manage state using plain JS objects or with libraries like Redux or Zustand.",
    },
  ],
  Integrations: [
    {
      question: "Can JavaScript integrate with APIs?",
      answer:
        "Yes, JavaScript is ideal for API integration using fetch or Axios.",
    },
  ],
  Legal: [
    {
      question: "Is JavaScript open source?",
      answer:
        "Yes, JavaScript is an open standard and freely available to use and modify.",
    },
  ],
};

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FaQ</h1>
      <p className="faq-subtitle">Your questions answered here.</p>

      <div className="faq-content">
        <ul className="faq-categories">
          {Object.keys(faqData).map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(null);
              }}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="faq-questions">
          <h3 className="faq-section-title">
            <span className="section-icon">🗂</span> {selectedCategory} Questions
          </h3>
          {faqData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <p>{item.question}</p>
                <span className="toggle-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
