import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-navy">
              AS
            </div>
            <span className="text-2xl font-extrabold leading-none">
              Avenir<br />Souriant
            </span>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/#about" className="hover:text-primary">About</Link></li>
            <li><Link href="/programs" className="hover:text-primary">Programs</Link></li>
            <li><Link href="/#location" className="hover:text-primary">Location</Link></li>
            <li><Link href="/#testimonials" className="hover:text-primary">Testimonials</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-bold mb-4">Address</h4>
          <address className="not-italic text-gray-300 space-y-2">
            <p>1325 Rue Cartier<br />Saint-Laurent, QC</p>
            <p className="pt-2 text-primary">+1 514 555 1234</p>
          </address>
        </div>

        {/* Social */}
        <div>
          <div className="flex gap-4 mb-6">
            {/* Social Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-primary cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-white cursor-pointer">EN</span> | 
            <span className="cursor-pointer hover:text-white">FR</span> | 
            <span className="cursor-pointer hover:text-white">AR</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Avenir Souriant. All rights reserved.</p>
      </div>
    </footer>
  );
};
