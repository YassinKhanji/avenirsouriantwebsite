"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Location', href: '/#location' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* We'll use a placeholder for the logo until assets are provided */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-navy">
            AS
          </div>
          <span className="text-2xl font-extrabold text-navy leading-none">
            Avenir<br />Souriant
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-navy font-bold hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <span className="text-navy cursor-pointer">EN</span> | 
            <span className="cursor-pointer hover:text-navy">FR</span> | 
            <span className="cursor-pointer hover:text-navy">AR</span>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-navy font-bold text-lg hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
