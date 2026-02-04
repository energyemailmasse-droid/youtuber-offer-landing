import React from 'react';
import { AlertCircle } from 'lucide-react';
import '../index.css';

const Notice = () => {
    return (
        <div className="notice-section">
            <div className="alert-box">
                <div className="alert-header">
                    <AlertCircle className="alert-icon" size={24} />
                    <span className="alert-title">Eligibility Requirements</span>
                </div>
                <p className="alert-text">
                    Due to regional requirements, this opportunity is currently only available to residents of the following countries:
                </p>
                <div className="country-badges">
                    <span className="badge">United States</span>
                    <span className="badge">United Kingdom</span>
                    <span className="badge">Canada</span>
                    <span className="badge">Australia</span>
                </div>
                <p className="alert-note">Please do not apply if you do not reside in one of these locations.</p>
            </div>
        </div>
    );
};

export default Notice;
