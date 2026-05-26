'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { TransitionLink } from './TransitionLink';

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Smart Header Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true); // Scrolling down -> hide header
    } else {
      setIsHidden(false); // Scrolling up -> show header
    }
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Register', path: '/register' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-white shadow-sm w-full font-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start">
            <TransitionLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={150} 
                height={40} 
                className="object-contain"
                priority
              />
            </TransitionLink>
          </div>
          <nav className="hidden md:flex space-x-12" onMouseLeave={() => setHoveredTab(null)}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div 
                  key={link.path} 
                  className="relative py-2"
                  onMouseEnter={() => setHoveredTab(link.path)}
                >
                  <TransitionLink 
                    href={link.path} 
                    className={`text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}
                  >
                    {link.name}
                  </TransitionLink>
                  
                  {/* Hover Underline Animation */}
                  {hoveredTab === link.path && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Active Underline */}
                  {isActive && hoveredTab !== link.path && (
                    <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary opacity-50" />
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-primary focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-6 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <div key={link.path} className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    <TransitionLink 
                      href={link.path} 
                      className={`block text-2xl font-medium py-2 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-900 hover:text-primary'}`}
                    >
                      {link.name}
                    </TransitionLink>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
