import React from 'react';
import { Check } from 'lucide-react';
import '../index.css';

const Steps = () => {
    const stepsData = [
        {
            id: 1,
            title: "Complete Application Survey",
            desc: "Fill out the application survey. You must provide correct information to be contacted for the role."
        },
        {
            id: 2,
            title: "Watch & Review",
            desc: "Watch YouTube videos and flag inappropriate content."
        },
        {
            id: 3,
            title: "Get Paid Weekly",
            desc: "Receive weekly payments directly to your bank account or PayPal."
        }
    ];

    return (
        <div className="steps-wrapper">
            <div className="steps-max-width">
                <h3 className="steps-heading">Quick Start Guide →</h3>
                <div className="steps-list">
                    {stepsData.map((step) => (
                        <div key={step.id} className="step-item">
                            <div className="step-check">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <div className="step-content">
                                <h4 className="step-title">{step.title}</h4>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;
