import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import '../index.css';

const VouchNotifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentName, setCurrentName] = useState("");
    const [currentMessage, setCurrentMessage] = useState("");

    const names = [
        "Sarah M.", "David K.", "Jessica L.", "Michael R.", "Emma W.",
        "James P.", "Sophie T.", "Daniel B.", "Olivia H.", "William S."
    ];

    const messages = [
        "received a payment of $142 for 4 videos",
        "just earned $85 for reviewing",
        "received $320 via PayPal",
        "earned $56 for 2 hours of work",
        "received a payment of $210 for 6 videos"
    ];

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            triggerNotification();
        }, 2000);

        const triggerNotification = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            setCurrentName(randomName);
            setCurrentMessage(randomMessage);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
                setTimeout(triggerNotification, 8000);
            }, 5000);
        };

        return () => clearTimeout(startTimeout);
    }, []);

    if (!isVisible && !currentName) return null;

    return (
        <div className={`vouch-notification ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="vouch-icon-wrapper">
                <CheckCircle size={24} className="vouch-icon" />
            </div>
            <div className="vouch-content">
                <p className="vouch-text">
                    <span className="vouch-name">{currentName}</span> {currentMessage}
                </p>
                <span className="vouch-time">Just now</span>
            </div>
        </div>
    );
};

export default VouchNotifications;
