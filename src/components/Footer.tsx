import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Info */}
          <div>
            <Link href="/">
              <Image 
                src="/images/Avenir_Souriant_Logo_2-removebg-preview.png" 
                alt="Avenir Souriant Logo" 
                width={200} 
                height={50} 
                className="brightness-0 invert object-contain mb-6"
              />
            </Link>
            <p className="mb-4">
              We offer child care services for families in need of a short-term babysitter, a nanny, or a childminder.
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">📍</span> 7507 Dewey Route, East Darrylville, ME 36932, United States
            </p>
            <a href="#" className="text-primary-light hover:text-white underline text-sm mb-6 inline-block">show on map</a>
            
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
            <h3 className="text-2xl font-semibold mb-6">Need a Babysitter?</h3>
            <p className="flex items-center text-xl font-bold mb-6">
              <span className="mr-2">📞</span>
              <a href="tel:+18001234567" className="hover:text-primary-light">+1-800-123-4567</a>
            </p>
            <div className="border-t border-primary-light opacity-50 mb-6"></div>
            <p className="mb-4">
              Mon-Fri: 9 AM - 6 PM<br />
              Saturday: 9 AM - 4 PM<br />
              <strong>Emergency Available!</strong>
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:babycare@support.com" className="hover:text-primary-light">babycare@support.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/about" className="hover:text-primary-light transition-colors">About Company</Link>
              <Link href="/services" className="hover:text-primary-light transition-colors">Our Services</Link>
              <Link href="/blog" className="hover:text-primary-light transition-colors">Blog</Link>
              <Link href="/team" className="hover:text-primary-light transition-colors">Our Team</Link>
              <Link href="/contact" className="hover:text-primary-light transition-colors">Testimonials</Link>
              <Link href="/about" className="hover:text-primary-light transition-colors">Our Vision</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form className="max-w-md mx-auto flex gap-2 justify-center items-center mb-8">
            <input 
              type="text" 
              placeholder="Enter your Name" 
              className="px-4 py-2 rounded-md bg-blue-400 text-white placeholder-blue-100 border-none focus:outline-none focus:ring-2 focus:ring-white w-full"
              required 
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Submit
            </button>
          </form>
          <p className="text-sm opacity-75">
            Avenir Souriant © {new Date().getFullYear()} All rights reserved. Terms of use and Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
