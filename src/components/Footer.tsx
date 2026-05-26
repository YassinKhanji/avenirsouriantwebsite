import Link from 'next/link';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';

export default function Footer() {
  return (
    <footer 
      className="relative text-white pt-16 pb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      {/* Overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-primary/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Info */}
          <div>
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={200} 
                height={50} 
                className="brightness-0 invert object-contain mb-6"
              />
            </Link>
            <p className="mb-4">
              Building the next generation of confident Arabic speakers, one smiling face at a time.
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">📍</span> 1325 Rue Cartier, Saint-Laurent, QC H4L 2N6
            </p>
            <a href="https://maps.google.com/?q=1325+Rue+Cartier,+Saint-Laurent,+QC+H4L+2N6" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-white underline text-sm mb-6 inline-block">show on map</a>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* Facebook Icon Placeholder */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* Twitter Icon Placeholder */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* Instagram Icon Placeholder */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Have Questions?</h3>
            <p className="flex items-center text-xl font-bold mb-6">
              <span className="mr-2">📞</span>
              <a href="tel:+15145154492" className="hover:text-primary-light">(514) 515-4492</a>
            </p>
            <div className="border-t border-primary-light opacity-50 mb-6"></div>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:administration@avenirsouriant.com" className="hover:text-primary-light">administration@avenirsouriant.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 font-heading">
              <TransitionLink href="/" className="hover:text-primary-light transition-colors">Home</TransitionLink>
              <TransitionLink href="/programs" className="hover:text-primary-light transition-colors">Programs</TransitionLink>
              <TransitionLink href="/register" className="hover:text-primary-light transition-colors">Register</TransitionLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-75">
            Avenir Souriant © {new Date().getFullYear()} All rights reserved. Terms of use and Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
