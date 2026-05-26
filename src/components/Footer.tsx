import Link from 'next/link';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';

export default function Footer() {
  return (
    <footer 
      className="relative text-white pt-16 pb-8 bg-repeat bg-center"
      style={{ backgroundImage: "url('/images/sky_blue_girih_star_background.png')", backgroundSize: "688px" }}
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
              <a href="https://www.facebook.com/profile.php?id=61573071398618" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* Facebook Icon Placeholder */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/avenir-souriant/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* LinkedIn Icon Placeholder */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/avenir.souriant/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light">
                {/* Instagram Icon Placeholder */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Have Questions?</h3>
            <p className="flex items-center text-xl font-bold mb-2">
              <span className="mr-2">📞</span>
              <a href="tel:+15145815305" className="hover:text-primary-light">(514) 581-5305</a>
            </p>
            <p className="flex items-center text-xl font-bold mb-6">
              <span className="mr-2">📞</span>
              <a href="tel:+14387651289" className="hover:text-primary-light">(438) 765-1289</a>
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
