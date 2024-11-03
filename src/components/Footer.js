// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-secondary text-light text-center py-4">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Gadget Haven. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
