import React, { useState } from "react";
import "../faq.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: 'What is the "Python for Data Science" course?',
      answer:
        "This is a comprehensive course that teaches you how to use the Python programming language and its powerful libraries to manipulate, analyze, visualize, and interpret complex data sets.",
    },
    {
      question: "Who is this course for?",
      answer:
        "It's designed for aspiring data analysts, data scientists, and developers who want to add data processing and analysis skills to their toolkit. It's perfect for anyone looking to start a career in the data industry.",
    },
    {
      question: "Why is Python the preferred language for Data Science?",
      answer:
        "Python's simple syntax, extensive collection of specialized libraries (like Pandas, NumPy, and Scikit-learn), and strong community support have made it the industry standard for data science and machine learning tasks.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course consists of over 40 hours of content, including hands-on coding exercises, projects, and real-world data analysis labs.",
    },
  ],
  "Course Content": [
    {
      question: "What are the main libraries I will learn?",
      answer:
        "You will master the core data science stack: NumPy for numerical operations, Pandas for data manipulation, and Matplotlib/Seaborn for data visualization. The course also includes an introduction to Scikit-learn for machine learning.",
    },
    {
      question: "Will I work with real-world data?",
      answer:
        "Yes, a key part of this course is applying your skills to real-world datasets. You will learn how to perform exploratory data analysis (EDA) to uncover insights and patterns from raw data.",
    },
    {
      question: "Is this course project-based?",
      answer:
        "Absolutely. The course culminates in a final project where you will analyze a dataset from start to finish, which will be a valuable addition to your professional portfolio.",
    },
  ],
  Prerequisites: [
    {
      question: "Do I need to be an expert in Python to start?",
      answer:
        "A basic understanding of Python programming concepts (variables, loops, functions) is required. The course includes a refresher on fundamentals but quickly moves into data science libraries.",
    },
    {
      question: "What software do I need to install?",
      answer:
        "You will need Python and the Anaconda distribution, which conveniently bundles all the necessary data science libraries and tools like Jupyter Notebook. We will guide you through the entire setup process.",
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
        "Your skills will be assessed through a final project submission. You will be required to analyze a dataset and present your findings, demonstrating your proficiency in data manipulation and visualization.",
    },
    {
      question: "When can I enroll?",
      answer:
        "Enrollment for the next batch starts in October 2025. Please refer to the course details page for the most current information.",
    },
  ],
};

const PythonFaq = () => {
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

export default PythonFaq;
