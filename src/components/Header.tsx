'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Register', href: '/register' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isScrolledDown ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 z-50 bg-white shadow-sm w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={200} 
                height={50} 
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 relative">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.href} 
                className="relative"
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <Link 
                  href={link.href} 
                  className="relative px-3 py-2 text-gray-900 hover:text-primary font-medium font-heading transition-colors"
                >
                  {link.name}
                </Link>
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
