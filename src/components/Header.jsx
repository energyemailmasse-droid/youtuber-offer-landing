import React from 'react';
import { UserCircle } from 'lucide-react';
import '../index.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <img src="/logo.png" alt="YouTube" style={{ height: '40px', display: 'block' }} />
                </div>

                <a href="https://trkio.org/aff_c?offer_id=1372&aff_id=159911" className="sign-in-btn" style={{ textDecoration: 'none' }}>
                    <UserCircle size={20} />
                    Sign in
                </a>
            </div>
        </header>
    );
};

export default Header;
