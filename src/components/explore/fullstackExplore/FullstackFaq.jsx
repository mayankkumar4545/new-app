import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is "Full Stack Development"?',
      answer:
        "Full stack development involves building and maintaining both the frontend (client-side) and the backend (server-side) of a web application. A full stack developer is proficient in the entire technology stack, from the user interface to the database.",
    },
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for aspiring web developers who want a complete skill set, frontend developers looking to learn backend technologies, and anyone aiming to build and deploy entire web applications from scratch.",
    },
    {
      question: "Why is MERN stack a popular choice?",
      answer:
        "The MERN (MongoDB, Express.js, React, Node.js) stack is highly popular because it uses JavaScript across the entire application, making it efficient to develop and maintain. It's a powerful and in-demand skill set for modern web development.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 40 hours of content, including hands-on coding sessions, projects, and deployment labs.",
    },
  ],
  "Course Content": [
    {
      question: "What technologies will I learn in this course?",
      answer:
        "You will master the complete MERN stack: React for building dynamic user interfaces, Node.js and Express.js for creating robust backend APIs, and MongoDB for managing a NoSQL database.",
    },
    {
      question: "Will I build a complete, real-world project?",
      answer:
        "Yes, the core of this course is a capstone project where you will build a full-featured web application from start to finish, including user authentication, data management, and deployment.",
    },
    {
      question: "Does this course cover deployment?",
      answer:
        "Absolutely. The final module is dedicated to DevOps and deployment, where you will learn how to prepare your application for a production environment and deploy it to a cloud platform.",
    },
  ],
  Prerequisites: [
    {
      question: "What skills are required before starting this course?",
      answer:
        "A solid understanding of HTML, CSS, and modern JavaScript (including ES6+ features like async/await) is essential. Prior experience with a frontend framework is helpful but not required.",
    },
    {
      question: "What software will I need?",
      answer:
        "You will need a code editor like VS Code, Node.js and npm installed on your computer, and a free account with a cloud hosting service like Vercel or Render for deployment.",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Enroll Now" button and completing the payment process.',
    },
    {
      question: "How will my skills be evaluated?",
      answer:
        "Your skills will be assessed based on the successful completion and submission of the final, full-stack application project. This project will serve as a key piece for your professional portfolio.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on July 1st, 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const FullstackFaq = () => {
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
            <span className="section-icon">🗂️</span> {selectedCategory}{" "}
            Questions
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

export default FullstackFaq;
