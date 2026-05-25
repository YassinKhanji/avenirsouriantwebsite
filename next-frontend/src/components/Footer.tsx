import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
        <div className="container footer-container">
            <div className="footer-brand">
                <div className="logo footer-logo">
                    <span className="logo-icon">🌞📖</span>
                    <span className="logo-text">Avenir<br/>Souriant</span>
                </div>
                <p className="copyright">© 2022 - Avenir Souriant</p>
            </div>
            
            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#programs">Programs</Link></li>
                    <li><Link href="/#location">Location</Link></li>
                    <li><Link href="/#testimonials">Testimonials</Link></li>
                </ul>
            </div>

            <div className="footer-address">
                <h4>Address</h4>
                <p>📍 1325 Rue Cartier, Saint-Laurent, QC</p>
                <p>📞 +1 514 555 1234</p>
            </div>

            <div className="footer-social">
                <div className="social-icons">
                    <span>📘</span> <span>📸</span> <span>🐦</span> <span>▶️</span>
                </div>
                <div className="footer-lang">
                    EN | FR | AR
                </div>
            </div>
        </div>
    </footer>
  );
}
