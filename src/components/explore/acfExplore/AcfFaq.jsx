import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is the "Applied Computer Fundamentals" course?',
      answer:
        "It's a foundational course designed to teach the core concepts of computer systems, including hardware, software, operating systems, and networking, with a focus on practical skills for various tech industry careers.",
    },
    {
      question: "Who is this course for?",
      answer:
        "It's perfect for beginners with no prior tech experience, students looking to strengthen their computer science basics, and individuals considering a career change into the IT industry.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 15 hours of content, which you can complete at your own pace.",
    },
    {
      question: "How will this course help my career?",
      answer:
        "It provides the essential vocabulary and understanding needed to pursue further specialized training in any tech field. It helps you make an informed decision about which IT career path is right for you.",
    },
  ],
  "Course Content": [
    {
      question: "What topics are covered in the course?",
      answer:
        "The curriculum covers computer hardware components, types of software, operating systems like Windows and Linux, computer networking basics, and an introduction to cybersecurity principles.",
    },
    {
      question: 'What is meant by "Industry Pathways"?',
      answer:
        "The course concludes with a module that introduces various career tracks in the tech industry, such as Web Development, Data Science, and Cybersecurity, explaining the skills and next steps for each path.",
    },
    {
      question: "Does the course include practical projects?",
      answer:
        "Yes, the course emphasizes hands-on learning, including labs on basic Linux commands and understanding system configurations to help solidify theoretical concepts.",
    },
  ],
  Prerequisites: [
    {
      question: "Do I need any prior programming knowledge?",
      answer:
        "No, this course is designed for absolute beginners. No prior programming or IT experience is required to start.",
    },
    {
      question: "What software or tools do I need?",
      answer:
        "You will need a standard computer (running Windows, macOS, or Linux) with a stable internet connection. The course will guide you on how to set up any necessary free software.",
    },
  ],
  "Enrollment & Exams": [
    {
      question: "How do I enroll in the course?",
      answer:
        'You can enroll directly from the course page by clicking the "Buy Now" button and completing the payment process.',
    },
    {
      question: "Is there a final exam for this course?",
      answer:
        "Yes, the course concludes with a proctored exam to test your understanding of the concepts. Passing the exam is required to receive the course certificate.",
    },
    {
      question: "When is the next enrollment deadline?",
      answer:
        "The upcoming enrollment deadline is July 30th, 2025. Please refer to the course details page for the most current exam and enrollment dates.",
    },
  ],
};

const AcfFaq = () => {
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

export default AcfFaq;
