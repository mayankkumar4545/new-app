import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is the "Database Management Essentials" course?',
      answer:
        "This is a foundational course that teaches you how to design, query, and manage both relational (SQL) and non-relational (NoSQL) databases. It's a critical skill for anyone involved in building or analyzing software applications.",
    },
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for aspiring backend developers, data analysts, full-stack developers, and anyone who wants to understand how data is stored and retrieved efficiently in modern applications.",
    },
    {
      question: "Why is learning about databases important?",
      answer:
        "Nearly every application, from social media to e-commerce, relies on a database. Understanding how to manage data is a fundamental skill that makes you a more effective and valuable developer or data professional.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 25 hours of content, including practical labs, query-writing exercises, and a database design project.",
    },
  ],
  "Course Content": [
    {
      question: "What are the main topics covered in this course?",
      answer:
        "We cover the fundamentals of the relational model, master SQL for data manipulation and querying, and dive into database design with normalization. The course also includes an introduction to NoSQL databases like MongoDB.",
    },
    {
      question: "Will I learn both SQL and NoSQL?",
      answer:
        "Yes. The primary focus is on mastering SQL, as it is the industry standard. However, the course includes a dedicated module on NoSQL to give you a well-rounded understanding of modern data management.",
    },
    {
      question: "Is this course hands-on?",
      answer:
        "Absolutely. You will spend a significant amount of time writing your own SQL queries, designing database schemas, and working with real-world data scenarios to solidify your skills.",
    },
  ],
  Prerequisites: [
    {
      question: "Do I need programming experience to start?",
      answer:
        "No prior programming experience is required. This course is designed to be beginner-friendly. A basic understanding of computer fundamentals is helpful but not mandatory.",
    },
    {
      question: "What software will I need?",
      answer:
        "You will need a computer with a standard operating system (Windows, macOS, or Linux). We will guide you through the process of installing a free, open-source SQL database like PostgreSQL for your exercises.",
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
        "Your understanding will be assessed through a combination of coding assignments and a final proctored exam that tests your ability to design a database and write complex SQL queries.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on August 1st, 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const DatabaseFaq = () => {
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

export default DatabaseFaq;
