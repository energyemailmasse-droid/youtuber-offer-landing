import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../index.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "How much does the job pay?",
            answer: "The pay starts at $36 per hour, with weekly payments."
        },
        {
            question: "Do I need prior experience?",
            answer: "No, full training is provided for all new moderators."
        },
        {
            question: "What are the hours?",
            answer: "The schedule is flexible. You can choose your own hours."
        },
        {
            question: "How do I get paid?",
            answer: "Payments are sent via Direct Deposit or PayPal every Friday."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header">
                                {item.question}
                                <ChevronDown
                                    className="accordion-icon"
                                    size={20}
                                    color="#606060"
                                />
                            </div>
                            <div className="accordion-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
