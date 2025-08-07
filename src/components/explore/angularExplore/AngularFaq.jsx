import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What is Angular?",
      answer:
        "Angular is a powerful, open-source web application framework developed by Google. It is used to build dynamic, efficient, and sophisticated single-page applications (SPAs).",
    },
    {
      question: "Who is this course for?",
      answer:
        "This course is ideal for frontend developers who want to master a robust framework, backend developers looking to become full-stack, and anyone aiming to build large-scale, enterprise-level web applications.",
    },
    {
      question: "Why should I learn Angular instead of other frameworks?",
      answer:
        "Angular provides a comprehensive, opinionated structure that is excellent for large teams and complex projects. Its powerful features like dependency injection, a robust CLI, and built-in form handling make it a top choice for enterprise applications.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 35 hours of in-depth content, including video lectures, coding exercises, and a final project.",
    },
  ],
  "Course Content": [
    {
      question: "What are the main topics covered in this course?",
      answer:
        "We cover everything from the fundamentals of TypeScript and the Angular CLI to core concepts like components, services, and routing. You will also learn advanced topics like RxJS for reactive programming and state management.",
    },
    {
      question: "Will I build a complete project in this course?",
      answer:
        "Yes, the course is project-based. You will build a complete, real-world single-page application from scratch, allowing you to apply all the concepts you learn in a practical way.",
    },
    {
      question: "Does this course cover the latest version of Angular?",
      answer:
        "Absolutely. The curriculum is always kept up-to-date and teaches the latest stable version of Angular, including modern features and best practices.",
    },
  ],
  Prerequisites: [
    {
      question: "What skills do I need before starting this course?",
      answer:
        "You should have a strong understanding of HTML, CSS, and modern JavaScript (ES6+). While we cover the fundamentals of TypeScript, prior experience with object-oriented programming is beneficial.",
    },
    {
      question: "Do I need to be a professional developer to take this course?",
      answer:
        "No, but it is an intermediate-level course. It's suitable for aspiring developers who have already mastered the basics of web development and are ready to learn a powerful framework.",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Enroll Now" button and completing the payment process.',
    },
    {
      question: "What is the exam format?",
      answer:
        "Your understanding will be evaluated through a final project submission. You will be required to build a complete Angular application based on a set of requirements to earn your certificate.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts on August 1st, 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const AngularFaq = () => {
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

export default AngularFaq;
