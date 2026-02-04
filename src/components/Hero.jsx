import React from 'react';
import { PlayCircle } from 'lucide-react';
import '../index.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Become a <span className="highlight-text">Youtube Video Moderator</span>
                </h1>
                <h2 className="subtitle">
                    Earn $36/hour reviewing content from home.
                </h2>

                <div className="hero-description-box">
                    <p className="hero-description">
                        Join our team of remote moderators. Ensure community safety while watching videos.
                        <br />
                        <strong>No prior experience required. Training provided.</strong>
                    </p>
                </div>

                <a
                    href="https://trkio.org/aff_c?offer_id=1372&aff_id=159911"
                    className="cta-button"
                >
                    APPLY NOW
                </a>

                <p className="urgency-subtext">Immediate start available for qualified candidates.</p>
            </div>
        </div>
    );
};

export default Hero;
