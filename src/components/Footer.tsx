'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TransitionLink } from '@/components/TransitionLink';

export default function Footer() {
  return (
    <footer 
      className="relative text-white pt-16 pb-8 bg-repeat bg-center"
      style={{ backgroundImage: "url('/images/sky_blue_girih_star_background.png')", backgroundSize: "688px" }}
    >
      {/* Overlay to ensure legibility and ideal background tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17b699]/75 via-[#13a087]/78 to-[#0f8a75]/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-start">
          {/* Logo and Info */}
          <div>
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.png" 
                alt="Avenir Souriant Logo" 
                width={200} 
                height={50} 
                className="brightness-0 invert object-contain mb-4 sm:mb-6 w-36 sm:w-48"
              />
            </Link>
            <p className="mb-4 text-white/95 font-medium leading-relaxed text-sm sm:text-base">
              Join Avenir Souriant and give your child the gift of language and adventure.
            </p>
            <p className="flex items-start gap-2 mb-2 text-white/95 font-medium text-sm sm:text-base">
              <span className="shrink-0 mt-0.5">📍</span>
              <span>1325 Rue Cartier, Saint-Laurent, QC H4L 2N6</span>
            </p>
            <a href="https://maps.google.com/?q=1325+Rue+Cartier,+Saint-Laurent,+QC+H4L+2N6" target="_blank" rel="noopener noreferrer" className="text-secondary-light hover:text-white underline text-xs sm:text-sm mb-6 inline-block font-semibold">
              View on Google Maps
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61573071398618" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:scale-110 transition-all" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/avenir-souriant/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/avenir.souriant/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:scale-110 transition-all" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
              </a>
              <a href="https://www.tiktok.com/@avenirsouriant" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:scale-110 transition-all" aria-label="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 sm:mb-6 text-white">Questions?</h3>
            <p className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-2">
              <span className="shrink-0">📞</span>
              <a href="tel:+15145815305" className="text-white hover:text-secondary-light transition-colors force-ltr" dir="ltr">(514) 581-5305</a>
            </p>
            <p className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              <span className="shrink-0">📞</span>
              <a href="tel:+14387651289" className="text-white hover:text-secondary-light transition-colors force-ltr" dir="ltr">(438) 765-1289</a>
            </p>
            <div className="border-t border-white/20 mb-4 sm:mb-6"></div>
            <p className="flex items-start gap-2 font-medium text-sm sm:text-base">
              <span className="shrink-0 mt-0.5">✉️</span>
              <a href="mailto:administration@avenirsouriant.com" className="text-white hover:underline break-all sm:break-normal force-ltr" dir="ltr">administration@avenirsouriant.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 sm:mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 font-heading text-sm sm:text-base">
              <TransitionLink href="/" className="text-white/95 hover:text-secondary-light font-medium transition-colors">Home</TransitionLink>
              <TransitionLink href="/programs" className="text-white/95 hover:text-secondary-light font-medium transition-colors">Programs</TransitionLink>
              <TransitionLink href="/register" className="text-white/95 hover:text-secondary-light font-medium transition-colors">Contact</TransitionLink>
              <TransitionLink href="/register-now" className="text-white/95 hover:text-secondary-light font-medium transition-colors">Register Now</TransitionLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-white/85 font-medium">
            © {new Date().getFullYear().toString()} Avenir Souriant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
