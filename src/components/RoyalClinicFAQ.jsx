import React, { useState } from 'react';
import './RoyalClinicFAQ.css';

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },


 
];

const RoyalClinicFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="royal-faq-section">

    <div className="royal-bg-btt"></div>

      <h2 className="royal-faq-heading">Frequently Asked Questions</h2>
      <div className="royal-faq-container">
        {faqs.map((faq, index) => (
          <div className="royal-faq-item" key={index}>
            <button
              className={`royal-faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="royal-faq-icon">{activeIndex === index ? '–' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="royal-faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoyalClinicFAQ;
