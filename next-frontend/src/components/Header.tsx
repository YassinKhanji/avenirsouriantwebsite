import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="navbar">
        <div className="container nav-container">
            <div className="logo">
                <span className="logo-icon">🌞📖</span>
                <span className="logo-text">Avenir<br/>Souriant</span>
            </div>
            <nav>
                <ul>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#programs">Programs</Link></li>
                    <li><Link href="/#location">Location</Link></li>
                    <li><Link href="/#testimonials">Testimonials</Link></li>
                </ul>
            </nav>
            <div className="language-selector">
                🌐 <strong>EN</strong> | FR | AR
            </div>
        </div>
    </header>
  );
}
